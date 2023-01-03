import {Middleware} from '@floating-ui/core';
import {Placement, Strategy, useClick, useDismiss, useFocus, useHover, useRole} from '@floating-ui/react';
import {AnimatePresenceProps, MotionProps} from 'framer-motion';
import {ElementType, PropsWithChildren} from 'react';

export interface FloatingChildrenProps {
	placement: Placement;
	open: boolean;
}

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
}
