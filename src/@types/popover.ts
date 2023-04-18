import {CSSProperties} from 'react';

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
