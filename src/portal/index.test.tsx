import {useCallback, useRef} from 'react';
import {Portal} from '.';
import {render} from '../test/utils';

describe('Portal', () => {
	it('should render in parent', () => {
		render(
			<div id='test-container'>
				<h1 className='test-portal-1'>Foo</h1>
				<Portal>
					<h1 className='test-portal-2'>Bar</h1>
				</Portal>
			</div>,
		);
		const rootElement = document.querySelector('#test-container');
		expect(rootElement?.contains(document.querySelector('.test-portal-1'))).to.equal(true);
		expect(rootElement?.contains(document.querySelector('.test-portal-2'))).to.equal(false);
	});

	it('should unmount when parent unmounts', () => {
		const Child = () => {
			const containerRef = useRef(null);
			return (
				<div>
					<div ref={containerRef} />
					<Portal container={() => containerRef.current}>
						<div id='test-portal' />
					</Portal>
				</div>
			);
		};

		const Parent = ({show = true}: {show?: boolean}) => {
			return <div>{show ? <Child /> : null}</div>;
		};

		const {rerender} = render(<Parent />);
		expect(document.querySelectorAll('#test-portal').length).to.equal(1);
		rerender(<Parent show={false} />);
		expect(document.querySelectorAll('#test-portal').length).to.equal(0);
	});

	it('should change container on prop change', () => {
		const Container = ({
			containerElement = false,
			disabled = true,
		}: {
			containerElement?: boolean;
			disabled?: boolean;
		}) => {
			const containerRef = useRef(null);
			const container = useCallback(() => (containerElement ? containerRef.current : null), [containerElement]);

			return (
				<span>
					<strong ref={containerRef} />
					<Portal disabled={disabled} container={container}>
						<div id='test-portal' />
					</Portal>
				</span>
			);
		};

		const {rerender} = render(<Container />);
		expect(document.querySelector('#test-portal')?.parentElement?.nodeName).to.equal('SPAN');
		rerender(<Container disabled containerElement />);
		expect(document.querySelector('#test-portal')?.parentElement?.nodeName).to.equal('SPAN');
		rerender(<Container disabled={false} containerElement />);
		expect(document.querySelector('#test-portal')?.parentElement?.nodeName).to.equal('STRONG');
		rerender(<Container disabled={false} containerElement={false} />);
		expect(document.querySelector('#test-portal')?.parentElement?.nodeName).to.equal('BODY');
	});

	it('should render overlay into container (document)', () => {
		render(
			<Portal>
				<div className='test-portal' />
				<div className='test-portal' />
			</Portal>,
		);
		expect(document.querySelectorAll('.test-portal').length).to.equal(2);
	});

	it('should render overlay into container (DOMNode)', () => {
		const container = document.createElement('div');
		render(
			<Portal container={container}>
				<div id='test-portal' />
			</Portal>,
		);
		expect(container.querySelectorAll('#test-portal').length).to.equal(1);
	});
});
