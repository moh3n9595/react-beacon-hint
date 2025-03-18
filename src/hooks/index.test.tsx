import {renderHook} from '@testing-library/react';

import {useSkipMountEffect} from './useSkipMountEffect';

const mocks = {
	useSkipMountEffectCallback: () => {},
};
const spy = vi.spyOn(mocks, 'useSkipMountEffectCallback');

describe('useSkipMountEffect', () => {
	it('should be true on first render and false after', () => {
		const {rerender, result} = renderHook(
			({test}) => useSkipMountEffect(mocks.useSkipMountEffectCallback, [test]),
			{
				initialProps: {test: 1},
			},
		);
		expect(result.current).toBe(true);
		rerender({test: 2});
		expect(spy).toBeCalled();
		expect(result.current).toBe(false);
	});
});
