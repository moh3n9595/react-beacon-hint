import {render, screen} from '@testing-library/react';

import {FillBeacon} from '..';
import {BeaconProps} from '../types';

describe('FillBeacon', () => {
	it('should render with size', () => {
		const size: BeaconProps['size'] = 50;
		render(<FillBeacon size={size} />);
		const fillBeacon = screen
			.getByTestId('fill-beacon')
			.querySelector('button');
		expect(fillBeacon).toBeInTheDocument();
		if (fillBeacon)
			expect(getComputedStyle(fillBeacon).width).toEqual(size + 'px');
	});

	it('should render with color', () => {
		const color: BeaconProps['color'] = 'rgb(10, 10, 10)';
		render(<FillBeacon color={color} />);
		const fillBeaconPulse = screen
			.getByTestId('fill-beacon')
			.querySelector('.pulse');
		expect(fillBeaconPulse).toHaveStyle(`background-color: ${color}`);
	});
});
