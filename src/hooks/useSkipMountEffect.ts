import {useEffect, useRef} from 'react';

/**
 * Custom hook that skips running an effect on the initial mount and only runs on subsequent updates.
 * @category Hooks
 * @template {readonly unknown[]} T - The dependency array type.
 * @param {() => void | (() => void)} effect - The effect function to execute after the initial render.
 * @param {T} deps - The dependency array that determines when the effect should re-run.
 * @returns {boolean} `true` on the first render and `false` on subsequent renders.
 */
export const useSkipMountEffect = <T extends readonly unknown[]>(
	effect: () => void | (() => void),
	deps: T,
) => {
	const isFirstMount = useRef(true);

	useEffect(() => {
		if (isFirstMount.current) {
			isFirstMount.current = false;
			return;
		}
		return effect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);

	return isFirstMount.current;
};
