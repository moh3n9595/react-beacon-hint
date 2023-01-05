import {useEffect, useRef} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSkipMountEffect = (callback: any, dependencies: any[]) => {
	const firstRenderRef = useRef(true);

	useEffect(() => {
		if (firstRenderRef.current) {
			firstRenderRef.current = false;
		} else {
			callback && callback();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...dependencies]);

	return firstRenderRef.current;
};
