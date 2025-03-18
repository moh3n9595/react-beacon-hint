import {render, screen} from '@testing-library/react';

import OutlineBeacon from '.';

import {type BeaconProps} from '../types';

describe('OutlineBeacon', () => {
	it('should render with size', () => {
		const size: BeaconProps['size'] = 50;
		render(<OutlineBeacon size={size} />);
		const outlineBeacon = screen
			.getByTestId('outline-beacon')
			.querySelector('button');
		expect(outlineBeacon).toBeInTheDocument();
		if (outlineBeacon)
			expect(getComputedStyle(outlineBeacon).width).toEqual(size + 'px');
	});

	it('should render with color', () => {
		const color: BeaconProps['color'] = 'rgb(10, 10, 10)';
		render(<OutlineBeacon color={color} />);
		const outlineBeaconInner = screen
			.getByTestId('outline-beacon')
			.querySelector('.inner');
		const outlineBeaconOuter = screen
			.getByTestId('outline-beacon')
			.querySelector('.outer');
		expect(outlineBeaconInner).toHaveStyle(`background-color: ${color}`);
		expect(outlineBeaconOuter).toHaveStyle(`border-color: ${color}`);
	});
});
