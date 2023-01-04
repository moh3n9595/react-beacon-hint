import {render, screen} from '../test/utils';
import {PopoverProps} from '../@types';
import {Popover} from '.';

describe('Popover', () => {
	it('should render with text', () => {
		const text: PopoverProps['text'] = 'test';
		render(<Popover text={text} />);
		const popover = screen.getByTestId('popover');
		expect(popover).toBeInTheDocument();
		expect(popover).toHaveTextContent(text);
	});
});
