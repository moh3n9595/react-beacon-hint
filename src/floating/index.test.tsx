/* eslint-disable @typescript-eslint/no-empty-function */
import {createRef} from 'react';
import {beforeAll} from 'vitest';
import {Floating, FloatingRef} from '.';
import {FloatingChildrenProps, FloatingProps} from '../@types';
import {act, render, screen, userEvent, waitFor} from '../test/utils';

beforeAll(() => {
	global.ResizeObserver = class ResizeObserver {
		observe() {
			// do nothing
		}
		unobserve() {
			// do nothing
		}
		disconnect() {
			// do nothing
		}
	};
});

const defaultProps: FloatingProps = {
	children: <svg />,
	floatingComponent: <span>Hello World</span>,
	open: true,
};

describe('Popper', () => {
	it('should children see the placement & open props', async () => {
		const containerRef = createRef<HTMLDivElement>();
		render(
			<div>
				<div>
					<Floating
						open
						floatingComponent={({open, placement}: FloatingChildrenProps) => {
							return <div data-testid='renderSpy' data-placement={placement} data-open={open} />;
						}}
						placement='top'
					>
						<div id='test-portal-anchor' ref={containerRef} />
					</Floating>
				</div>
			</div>,
		);
		await act(async () => {});
		expect(screen.getByTestId('renderSpy')).toHaveAttribute('data-placement', 'top');
		expect(screen.getByTestId('renderSpy')).toHaveAttribute('data-open', 'true');
	});
	it('should stick to anchorEl', () => {
		const Wrapper = () => {
			return (
				<div>
					<div>
						<Floating open floatingComponent={<div id='test-portal'>test-portal</div>} placement='left'>
							<div id='test-portal-anchor' />
						</Floating>
					</div>
				</div>
			);
		};
		render(<Wrapper />);
		expect(document.querySelector('#test-portal')?.getBoundingClientRect().right).toBe(
			document.querySelector('#test-portal-anchor')?.getBoundingClientRect().left,
		);
	});
	it('should open without any issue', async () => {
		const containerRef = createRef<HTMLDivElement>();
		const {rerender, queryByTestId} = render(
			<div>
				<div>
					<Floating
						{...defaultProps}
						floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
						open={false}
						disablePortal
					>
						<div id='test-portal-anchor' ref={containerRef} />
					</Floating>
				</div>
			</div>,
		);
		await act(async () => {});
		expect(queryByTestId('renderSpy')).toBeNull();
		rerender(
			<div>
				<div>
					<Floating
						{...defaultProps}
						floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
						open
						disablePortal
					>
						<div id='test-portal-anchor' ref={containerRef} />
					</Floating>
				</div>
			</div>,
		);
		await act(async () => {});
		expect(queryByTestId('renderSpy')).not.toBeNull();
		expect(queryByTestId('renderSpy')).toHaveTextContent('Hello World');
	});
	it('should close without any issue', async () => {
		const {rerender, queryByTestId} = render(
			<div>
				<div>
					<Floating {...defaultProps} floatingComponent={<div data-testid='renderSpy'>Hello World</div>} open>
						<div id='test-portal-anchor' />
					</Floating>
				</div>
			</div>,
		);
		await act(async () => {});
		expect(queryByTestId('renderSpy')).not.toBeNull();
		expect(queryByTestId('renderSpy')).toHaveTextContent('Hello World');
		rerender(
			<div>
				<div>
					<Floating {...defaultProps} floatingComponent={<div data-testid='renderSpy'>Hello World</div>} open={false}>
						<div id='test-portal-anchor' />
					</Floating>
				</div>
			</div>,
		);
		await act(async () => {});
		waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{
				timeout: 1000,
			},
		);
	});
	it('should get ref functions', async () => {
		const ref = createRef<FloatingRef>();
		render(
			<Floating ref={ref} {...defaultProps} floatingComponent={<div data-testid='renderSpy'>Hello World</div>} open>
				<div id='test-portal-anchor' />
			</Floating>,
		);
		expect(ref.current?.update).not.toBeNull();
		expect(typeof ref.current?.update).toBe('function');
	});
	it('should initial open without any issue', async () => {
		const {queryByTestId} = render(
			<div>
				<div>
					<Floating {...defaultProps} floatingComponent={<div data-testid='renderSpy'>Hello World</div>} disablePortal>
						<div data-testid='renderSpy2' />
					</Floating>
				</div>
			</div>,
		);
		await act(async () => {});
		waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('renderSpy2'));
		waitFor(
			() => {
				expect(queryByTestId('renderSpy')).not.toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('renderSpy2'));
		waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.hover(screen.getByTestId('renderSpy2'));
		waitFor(
			() => {
				expect(queryByTestId('renderSpy')).not.toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.unhover(screen.getByTestId('renderSpy2'));
		waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
	});
	it('should initialOpen work beside open', async () => {
		const ref = createRef<FloatingRef>();
		const {rerender} = render(
			<Floating ref={ref} {...defaultProps} floatingComponent={<div data-testid='renderSpy'>Hello World</div>} open>
				<div data-testid='renderSpy2' />
			</Floating>,
		);
		await act(async () => {});
		expect(ref.current?.open).toBe(true);
		rerender(
			<Floating
				ref={ref}
				{...defaultProps}
				floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
				open={false}
			>
				<div data-testid='renderSpy2' />
			</Floating>,
		);
		expect(ref.current?.open).toBe(false);
		rerender(
			<Floating
				ref={ref}
				{...defaultProps}
				floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
				initialOpen={false}
				open={null}
			>
				<div data-testid='renderSpy2' />
			</Floating>,
		);
		expect(ref.current?.open).toBe(false);
	});
	it('should custom interaction props work', async () => {
		const ref = createRef<FloatingRef>();
		const {queryByTestId} = render(
			<Floating
				ref={ref}
				{...defaultProps}
				floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
				open={null}
				focusProps={{enabled: false}}
				hoverProps={{enabled: false, move: true}}
				clickProps={{enabled: false}}
				roleProps={{enabled: false}}
				dismissProps={{enabled: false}}
			>
				<div data-testid='renderSpy2' />
			</Floating>,
		);
		await act(async () => {});
		waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('renderSpy2'));
		waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('renderSpy2'));
		userEvent.hover(screen.getByTestId('renderSpy2'));
		waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
	});
});
