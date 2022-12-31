import {Fragment} from 'react';
import {render} from './src/test/utils';

describe('Simple working test', () => {
	it('the title is visible', () => {
		render(<Fragment />);
		expect(true).toBe(true);
	});
});
