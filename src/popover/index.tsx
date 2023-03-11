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
 *
 * @category Components
 */
const MemoizedPopover = memo(Popover);
export {MemoizedPopover as Popover};
