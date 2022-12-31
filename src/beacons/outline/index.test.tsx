import {OutlineBeacon} from '..';
import {BeaconProps} from '../../@types';
import {render, screen} from '../../test/utils';

describe('OutlineBeacon', () => {
	it('should render with size', () => {
		const size: BeaconProps['size'] = 50;
		render(<OutlineBeacon size={size} />);
		const outlineBeacon = screen.getByTestId('outline-beacon').querySelector('button');
		expect(outlineBeacon).toBeInTheDocument();
		if (outlineBeacon) expect(getComputedStyle(outlineBeacon).width).toEqual(size + 'px');
	});

	it('should render with color', () => {
		const color: BeaconProps['color'] = 'green';
		render(<OutlineBeacon color={color} />);
		const outlineBeaconInner = screen.getByTestId('outline-beacon').querySelector('.inner');
		const outlineBeaconOuter = screen.getByTestId('outline-beacon').querySelector('.outer');
		expect(outlineBeaconInner).toHaveStyle(`background-color: ${color}`);
		expect(outlineBeaconOuter).toHaveStyle(`border-color: ${color}`);
	});
});
