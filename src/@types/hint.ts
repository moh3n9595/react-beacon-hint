import {PropsWithChildren} from 'react';
import {FloatingProps} from './floating';

/**
 * @category Props
 */
export interface HintProps extends PropsWithChildren {
	/**
	 * Whether to start the hint automatically or not (if false, you can start the hint by calling the start method)
	 * @default `true`
	 */
	autoStart?: boolean;
	/**
	 * The popover to display when the beacon is active (can be a string or a JSX element)
	 */
	popover: string | JSX.Element;
	/**
	 * Number of times to show the hint (if set to `always`, it will show the hint on each page load)
	 * @default `always`
	 */
	hit?: 'always' | number;
	/**
	 * The unique key of the hint (used to store the hint state in the local storage) (if not provided, the hint create that from the popover prop)
	 */
	uniqueKey?: number | string;
	/**
	 * Props for floating beacon (see FloatingProps)
	 * @default `{autoOffset: true, disablePortal: true}`
	 */
	beaconProps?: Omit<
		FloatingProps,
		| 'open'
		| 'setOpen'
		| 'initialOpen'
		| 'hoverProps'
		| 'focusProps'
		| 'roleProps'
		| 'dismissProps'
		| 'clickProps'
		| 'floatingComponent'
	> & {autoOffset?: boolean};
	/**
	 * Props for floating popover (see FloatingProps)
	 * @default `{arrow: {enabled: true}, hoverProps: {enabled: false}}`
	 */
	popoverProps?: Omit<FloatingProps, 'initialOpen' | 'floatingComponent'>;
	/**
	 * The beacon to display (can be `fill`, `outline` or a JSX element)
	 * @default `outline`
	 */
	beacon?: 'fill' | 'outline' | JSX.Element;
}

/**
 * @category Refs
 * @example
 * ```jsx
 * const hintRef = useRef<HintRef>(null);
 * return <Hint ref={hintRef} />;
 * ```
 */
export interface HintRef {
	/**
	 * Start the hint (if autoStart is set to false)
	 */
	start: () => void;
}
