import {createRef} from 'react';

import {offset} from '@floating-ui/react';
import {render, screen, waitFor} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import storage from 'local-storage-fallback';

import {Hint, HintRef} from '.';

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
					<div
						className='beacon-box'
						data-testid='beaconSpy'
						style={{width: 100, height: 100}}
					>
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
		await waitFor(
			() => {
				expect(queryByTestId('beaconSpy')?.textContent).toBe('Two');
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
		await waitFor(
			() => {
				expect(queryByTestId('beaconSpy')).toBeNull();
			},
			{timeout: 1000},
		);
	});

	it('render always', async () => {
		const {queryByTestId} = render(
			<Hint
				hit='always'
				beacon={
					<div
						className='beacon-box'
						data-testid='beaconSpy'
						style={{width: 100, height: 100}}
					>
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
		for (let index = 0; index < 10; index++) {
			await waitFor(
				() => {
					expect(queryByTestId('fill-beacon')).not.toBeNull();
				},
				{timeout: 1000},
			);
			userEvent.click(screen.getByTestId('fill-beacon'));
			await waitFor(
				() => {
					expect(queryByTestId('popover')).not.toBeNull();
					expect(screen.getByTestId('popover')).toHaveTextContent('test');
				},
				{timeout: 1000},
			);
		}

		const mockedOnToggle = vi.fn();

		rerender(
			<Hint
				hit='always'
				beacon='outline'
				popover={'test'}
				popoverProps={{
					onToggle: mockedOnToggle,
					middleware: [offset(10)],
				}}
				uniqueKey='drlH487h@$ho@A'
			>
				<div className='box' data-testid='boxSpy'>
					One
				</div>
			</Hint>,
		);

		for (let index = 0; index < 10; index++) {
			await waitFor(
				() => {
					expect(queryByTestId('outline-beacon')).not.toBeNull();
				},
				{timeout: 1000},
			);
			userEvent.click(screen.getByTestId('outline-beacon'));
			await waitFor(
				() => {
					expect(mockedOnToggle).toHaveBeenCalledTimes(index + 1);
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
		await waitFor(
			() => {
				expect(ref.current?.start).not.toBeNull();
				expect(typeof ref.current?.start).toBe('function');
			},
			{timeout: 1000},
		);
	});
});
