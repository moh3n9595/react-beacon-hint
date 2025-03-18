import {createRef} from 'react';

import {hide, shift} from '@floating-ui/react';
import {render, screen, waitFor} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';

import {Floating, FloatingChildrenProps, FloatingProps, FloatingRef} from '.';

const defaultProps: FloatingProps = {
	children: <svg />,
	floatingComponent: <span>Hello World</span>,
	open: true,
};

describe('Popper', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	it('should children see the placement & open props', async () => {
		render(
			<div>
				<div>
					<Floating
						open
						arrow={{enabled: true}}
						middleware={[shift()]}
						floatingComponent={({open, placement}: FloatingChildrenProps) => {
							return (
								<div
									data-testid='renderSpy'
									data-placement={placement}
									data-open={open}
								/>
							);
						}}
						placement='right'
					>
						<div id='test-portal-anchor' />
					</Floating>
				</div>
			</div>,
		);
		await waitFor(
			() => {
				expect(screen.getByTestId('renderSpy')).toHaveAttribute(
					'data-placement',
					'right',
				);
				expect(screen.getByTestId('renderSpy')).toHaveAttribute(
					'data-open',
					'true',
				);
			},
			{timeout: 1000},
		);
	});
	it('should stick to anchorEl', async () => {
		const Wrapper = () => {
			return (
				<div>
					<div>
						<Floating
							open
							floatingComponent={<div id='test-portal'>test-portal</div>}
							placement='left'
						>
							<div id='test-portal-anchor' />
						</Floating>
					</div>
				</div>
			);
		};
		render(<Wrapper />);
		await waitFor(
			() => {
				expect(
					document.querySelector('#test-portal')?.getBoundingClientRect().right,
				).toBe(
					document.querySelector('#test-portal-anchor')?.getBoundingClientRect()
						.left,
				);
			},
			{timeout: 1000},
		);
	});
	it('should open without any issue', async () => {
		const {rerender, queryByTestId} = render(
			<div>
				<div>
					<Floating
						{...defaultProps}
						arrow={{enabled: true, padding: 10}}
						placement='left'
						floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
						open={false}
						portal={false}
					>
						<div id='test-portal-anchor' />
					</Floating>
				</div>
			</div>,
		);

		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);

		rerender(
			<div>
				<div>
					<Floating
						{...defaultProps}
						floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
						open
						portal={false}
					>
						<div id='test-portal-anchor' />
					</Floating>
				</div>
			</div>,
		);

		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).not.toBeNull();
				expect(queryByTestId('renderSpy')).toHaveTextContent('Hello World');
			},
			{timeout: 1000},
		);
	});
	it('should close without any issue', async () => {
		const {rerender, queryByTestId} = render(
			<div>
				<div>
					<Floating
						{...defaultProps}
						floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
						open
					>
						<div id='test-portal-anchor' />
					</Floating>
				</div>
			</div>,
		);

		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).not.toBeNull();
				expect(queryByTestId('renderSpy')).toHaveTextContent('Hello World');
			},
			{
				timeout: 1000,
			},
		);

		rerender(
			<div>
				<div>
					<Floating
						{...defaultProps}
						floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
						open={false}
					>
						<div id='test-portal-anchor' />
					</Floating>
				</div>
			</div>,
		);

		await waitFor(
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
			<Floating
				ref={ref}
				{...defaultProps}
				floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
				open
			>
				<div id='test-portal-anchor' />
			</Floating>,
		);
		await waitFor(
			() => {
				expect(ref.current?.update).not.toBeNull();
				expect(typeof ref.current?.update).toBe('function');
			},
			{
				timeout: 1000,
			},
		);
	});
	it('should initial open without any issue', async () => {
		const {queryByTestId} = render(
			<div>
				<div>
					<Floating
						arrow={{enabled: true}}
						floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
						portal={false}
					>
						<div data-testid='renderSpy2' />
					</Floating>
				</div>
			</div>,
		);
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('renderSpy2'));
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).not.toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(document.body);
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.hover(screen.getByTestId('renderSpy2'));
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).not.toBeNull();
			},
			{timeout: 1000},
		);
		await userEvent.unhover(screen.getByTestId('renderSpy2'));
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
	});
	it('should custom interaction props work', async () => {
		const {queryByTestId} = render(
			<Floating
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
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('renderSpy2'));
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('renderSpy2'));
		userEvent.hover(screen.getByTestId('renderSpy2'));
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
	});
	it('should onToggle call with open data', async () => {
		const mockedOnToggle = vi.fn();
		const {queryByTestId} = render(
			<Floating
				floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
				onToggle={mockedOnToggle}
			>
				<div data-testid='renderSpy2' />
			</Floating>,
		);
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.hover(screen.getByTestId('renderSpy2'));
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).not.toBeNull();
			},
			{timeout: 1000},
		);
		expect(mockedOnToggle).toHaveBeenCalledTimes(1);
	});
	it('should style by middleware data', async () => {
		const {queryByTestId} = render(
			<Floating
				arrow={{
					enabled: true,
					middlewareDataArrowStyles: () => ({
						backgroundColor: 'rgb(255, 0, 0)',
					}),
				}}
				floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
				middlewareDataFloatingStyles={() => ({
					backgroundColor: 'rgb(255, 0, 0)',
				})}
			>
				<div data-testid='renderSpy2' />
			</Floating>,
		);
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.hover(screen.getByTestId('renderSpy2'));
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).not.toBeNull();
				expect(queryByTestId('floating-arrow')).not.toBeNull();
				expect(
					getComputedStyle(queryByTestId('floating-arrow')!).backgroundColor,
				).toBe('rgb(255, 0, 0)');
				expect(
					getComputedStyle(queryByTestId('floating-root')!).backgroundColor,
				).toBe('rgb(255, 0, 0)');
			},
			{timeout: 1000},
		);
	});
	it('should handle nested floating with nestedHide middleware', async () => {
		const {queryByTestId} = render(
			<Floating
				floatingComponent={
					<Floating
						floatingComponent={<div data-testid='renderSpy'>Hello World</div>}
						portal={false}
						middleware={[
							hide({
								strategy: 'referenceHidden',
							}),
						]}
						hideMiddleware={false}
					>
						<div data-testid='renderSpy2' />
					</Floating>
				}
				portal={false}
			>
				<div data-testid='renderSpy3' />
			</Floating>,
		);

		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).toBeNull();
				expect(queryByTestId('renderSpy2')).toBeNull();
			},
			{timeout: 1000},
		);
		userEvent.click(screen.getByTestId('renderSpy3'));
		await waitFor(
			() => {
				userEvent.click(screen.getByTestId('renderSpy2'));
			},
			{timeout: 1000},
		);
		await waitFor(
			() => {
				expect(queryByTestId('renderSpy')).not.toBeNull();
				expect(queryByTestId('renderSpy2')).not.toBeNull();
			},
			{timeout: 1000},
		);
	});
});
