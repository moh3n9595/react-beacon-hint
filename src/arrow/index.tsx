import {forwardRef, memo} from 'react';
import {ArrowProps} from '../@types';
import styles from './index.module.scss';

const Arrow = forwardRef<HTMLSpanElement, ArrowProps>(({size = 12, className = '', style = {}}, ref) => {
	return (
		<span
			ref={ref}
			style={{
				...style,
				width: size,
				height: size,
			}}
			className={[styles.arrow, className].join(' ')}
			data-testid='arrow'
		/>
	);
});

Arrow.displayName = 'Arrow';
export default memo(Arrow);
