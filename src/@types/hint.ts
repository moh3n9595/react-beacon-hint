import {PropsWithChildren} from 'react';
import {FloatingProps} from './floating';

/**
 *
 * @category Props
 */
export interface HintProps extends PropsWithChildren {
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
