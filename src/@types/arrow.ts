import {CSSProperties} from 'react';

/**
 * @category Props
 */
export interface ArrowProps {
	/**
	 * The size of the arrow
	 * @default `12`
	 */
	size?: number;
	/**
	 * The class name of the arrow
	 */
	className?: string;
	/**
	 * The style of the arrow
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
	 */
	style?: CSSProperties;
}
