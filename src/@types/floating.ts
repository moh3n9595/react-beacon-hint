import {Middleware, SideObject} from '@floating-ui/core';
import {Placement, Strategy, useClick, useDismiss, useFocus, useHover, useRole} from '@floating-ui/react';
import {AnimatePresenceProps, MotionProps, MotionStyle} from 'framer-motion';
import {ElementType, PropsWithChildren} from 'react';
import {ArrowProps} from './arrow';

/**
 *
 * @category Props
 */
export interface FloatingChildrenProps {
	placement: Placement;
	open: boolean;
}

/**
 *
 * @category Props
 */
export interface FloatingProps extends PropsWithChildren {
	initialOpen?: boolean;
	floatingComponent?: React.ReactNode | ((props: FloatingChildrenProps) => JSX.Element);
	disablePortal?: boolean;
	middleware?: (false | Middleware | null | undefined)[] | undefined;
	open?: boolean | null;
	setOpen?: (open: boolean) => void;
	placement?: Placement;
	strategy?: Strategy;
	animatePresenceProps?: AnimatePresenceProps;
	animateProps?: MotionProps;
	hoverProps?: Parameters<typeof useHover>[1];
	focusProps?: Parameters<typeof useFocus>[1];
	roleProps?: Parameters<typeof useRole>[1];
	dismissProps?: Parameters<typeof useDismiss>[1];
	clickProps?: Parameters<typeof useClick>[1];
	root?: ElementType;
	arrow?: ArrowProps & {enabled?: boolean; padding?: number | SideObject};
	floatingStyle?: MotionStyle;
	onToggle?: (open: boolean) => void;
}

/**
 *
 * @category Refs
 */
export interface FloatingRef {
	update: () => void;
	open: boolean;
}
