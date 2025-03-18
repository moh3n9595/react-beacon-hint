import {render, screen} from '@testing-library/react';

import {Popover, PopoverProps} from '.';

describe('Popover', () => {
	it('should render with text', () => {
		const text: PopoverProps['text'] = 'test';
		render(<Popover text={text} />);
		const popover = screen.getByTestId('popover');
		expect(popover).toBeInTheDocument();
		expect(popover).toHaveTextContent(text);
	});
});
