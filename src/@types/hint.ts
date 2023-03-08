import {PropsWithChildren} from 'react';
import {FloatingProps} from './floating';

/**
 *
 * @category Props
 */
export interface HintProps extends PropsWithChildren {
	autoStart?: boolean;
	popover: string | JSX.Element;
	hit?: 'always' | number;
	uniqueKey?: number | string;
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
	popoverProps?: Omit<FloatingProps, 'initialOpen' | 'floatingComponent'>;
	beacon?: 'fill' | 'outline' | JSX.Element;
}

/**
 *
 * @category Refs
 */
export interface HintRef {
	start: () => void;
}
