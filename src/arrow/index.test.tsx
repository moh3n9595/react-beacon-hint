import {Arrow} from '.';
import {render, screen} from '../test/utils';
import {ArrowProps} from '../@types';

describe('Arrow', () => {
	it('should render with size', () => {
		const size: ArrowProps['size'] = 50;
		render(<Arrow size={size} />);
		const arrow = screen.getByTestId('arrow');
		expect(arrow).toBeInTheDocument();
		expect(getComputedStyle(arrow).width).toEqual(size + 'px');
	});
});
