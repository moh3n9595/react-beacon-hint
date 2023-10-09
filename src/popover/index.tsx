import {memo} from 'react';
import {PopoverProps} from '../@types';
import styles from './index.module.scss';

const Popover = ({className = '', style = {}, text}: PopoverProps) => {
	return (
		<span style={style} className={[styles.popover, className].join(' ')} data-testid='popover'>
			{text}
		</span>
	);
};

/**
 * A popover component that stick to the beacon's edge in floating component.
 * @category Components
 * @example
 * ```jsx
 * <Popover className='custom-class' style={{color: 'red'}} text='Hello world' />
 * ```
 */
const MemoizedPopover = memo(Popover);
export {MemoizedPopover as Popover};
