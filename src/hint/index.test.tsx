/* eslint-disable @typescript-eslint/no-empty-function */
import {offset} from '@floating-ui/react';
import storage from 'local-storage-fallback';
import {createRef} from 'react';
import {beforeAll} from 'vitest';
import {Hint} from '.';
import {HintRef} from '../@types';
import {act, render, screen, userEvent, waitFor} from '../test/utils';

const mocks = {
	mockedOnToggle: (x: boolean) => x,
};
const spy = vi.spyOn(mocks, 'mockedOnToggle');

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

describe('Hint', () => {
	afterEach(() => {
		vi.restoreAllMocks();
		storage.clear();
	});
	it('render correctly', async () => {
		const {queryByTestId} = render(
			<Hint
				hit={2}
				beacon={
					<div className='beacon-box' data-testid='beaconSpy' style={{width: 100, height: 100}}>
						Two
					</div>
				}
				popover={
					<div className='popover-box' data-testid='popoverSpy'>
						Three
					</div>
				}
			>
				<div className='box' data-testid='boxSpy'>
					One
				</div>
			</Hint>,
		);
		await act(async () => {});
		expect(queryByTestId('beaconSpy')?.textContent).toBe('Two');
		userEvent.click(screen.getByTestId('beaconSpy'));
		await waitFor(
			() => {
				expect(queryByTestId('popoverSpy')).not.toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(document.body);
		await waitFor(
			() => {
				expect(queryByTestId('popoverSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('beaconSpy'));
		await waitFor(
			() => {
				expect(queryByTestId('popoverSpy')).not.toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(document.body);
		await waitFor(
			() => {
				expect(queryByTestId('popoverSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('beaconSpy'));
		await waitFor(
			() => {
				expect(queryByTestId('popoverSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('beaconSpy'));
		await waitFor(
			() => {
				expect(queryByTestId('popoverSpy')).toBeNull();
			},
			{timeout: 1000},
		);
	});

	it('render always', async () => {
		const {queryByTestId} = render(
			<Hint
				hit='always'
				beacon={
					<div className='beacon-box' data-testid='beaconSpy' style={{width: 100, height: 100}}>
						Two
					</div>
				}
				popover={
					<div className='popover-box' data-testid='popoverSpy'>
						Three
					</div>
				}
			>
				<div className='box' data-testid='boxSpy'>
					One
				</div>
			</Hint>,
		);
		await act(async () => {});
		for (let index = 0; index < 10; index++) {
			await waitFor(
				() => {
					expect(queryByTestId('beaconSpy')).not.toBeNull();
				},
				{timeout: 1000},
			);
			userEvent.click(screen.getByTestId('beaconSpy'));
			await waitFor(
				() => {
					expect(screen.getByTestId('popoverSpy')).not.toBeNull();
				},
				{timeout: 1000},
			);
		}
	});

	it('render default beacon + popover', async () => {
		const {queryByTestId, rerender} = render(
			<Hint hit='always' beacon='fill' popover={'test'}>
				<div className='box' data-testid='boxSpy'>
					One
				</div>
			</Hint>,
		);
		await act(async () => {});
		for (let index = 0; index < 10; index++) {
			expect(queryByTestId('fill-beacon')).not.toBeNull();
			userEvent.click(screen.getByTestId('fill-beacon'));
			await waitFor(
				() => {
					expect(queryByTestId('popover')).not.toBeNull();
					expect(screen.getByTestId('popover')).toHaveTextContent('test');
				},
				{timeout: 1000},
			);
		}

		rerender(
			<Hint
				hit='always'
				beacon='outline'
				popover={'test'}
				popoverProps={{
					onToggle: mocks.mockedOnToggle,
					middleware: [offset(10)],
					animateProps: {
						initial: {
							scale: 0,
							opacity: 0,
						},
						animate: {
							scale: [0, 1],
							opacity: [0, 1],
						},
						exit: {
							scale: [1, 0],
							opacity: [1, 0],
						},
						transition: {
							duration: 0.25,
							times: [0, 1],
						},
					},
				}}
				uniqueKey='drlH487h@$ho@A'
			>
				<div className='box' data-testid='boxSpy'>
					One
				</div>
			</Hint>,
		);

		await act(async () => {});
		for (let index = 0; index < 10; index++) {
			expect(queryByTestId('outline-beacon')).not.toBeNull();
			userEvent.click(screen.getByTestId('outline-beacon'));
			await waitFor(
				() => {
					expect(spy).toHaveBeenCalledTimes(index + 1);
					expect(screen.getByTestId('popover')).not.toBeNull();
					expect(screen.getByTestId('popover')).toHaveTextContent('test');
				},
				{timeout: 1000},
			);
		}
	});

	it('should get ref functions', async () => {
		const ref = createRef<HintRef>();
		render(
			<Hint ref={ref} hit='always' beacon='fill' popover={'test'}>
				<div className='box' data-testid='boxSpy'>
					One
				</div>
			</Hint>,
		);
		await act(async () => {});
		expect(ref.current?.start).not.toBeNull();
		expect(typeof ref.current?.start).toBe('function');
	});
});
