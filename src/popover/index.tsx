/**
 * @module Popover
 */
import {CSSProperties, memo} from 'react';

import styles from './index.module.scss';

import {COLORS} from '../constants';

/**
 * @category Props
 */
export interface PopoverProps {
	/**
	 * The text to display in the popover
	 */
	text: string;
	/**
	 * The class name of the popover
	 */
	className?: string;
	/**
	 * The style of the popover
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
	 */
	style?: CSSProperties;
}

const Popover = ({className = '', style = {}, text}: PopoverProps) => {
	return (
		<span
			style={{backgroundColor: COLORS.POPOVER, ...style}}
			className={[styles.popover, className].join(' ')}
			data-testid='popover'
		>
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
