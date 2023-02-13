import {memo, PropsWithChildren, useEffect, useRef} from 'react';
import {OverlayScrollbars} from 'overlayscrollbars';
import styles from './index.module.scss';

type IProps = PropsWithChildren;

const Result = ({children}: IProps) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			const os = OverlayScrollbars(ref.current, {});
			os.elements().viewport.scrollTo(0, 205);
		}
	}, []);

	return (
		<div data-overlayscrollbars-initialize ref={ref} className={`${styles.result} rounded-lg h-full mt-5 lg:mt-0`}>
			<div className='before'></div>
			<div className='children'>{children}</div>
			<div className='after'></div>
		</div>
	);
};

const MemoizedResult = memo(Result);
export {MemoizedResult as Result};
