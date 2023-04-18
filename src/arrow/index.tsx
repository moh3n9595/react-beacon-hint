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
/**
 * A triangle arrow component that stick to the popover's edge in floating component.
 * @category Components
 * @example
 * ```jsx
 * <Arrow size={12} className='custom-class' style={{color: 'red'}} />
 * ```
 */
const MemoizedArrow = memo(Arrow);
export {MemoizedArrow as Arrow};
