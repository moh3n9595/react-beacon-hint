import {Middleware, SideObject} from '@floating-ui/core';
import {Placement, Strategy, useClick, useDismiss, useFocus, useHover, useRole} from '@floating-ui/react';
import {AnimatePresenceProps, MotionProps, MotionStyle} from 'framer-motion';
import {ElementType, PropsWithChildren} from 'react';
import {ArrowProps} from './arrow';

/**
 * @category Props
 */
export interface FloatingChildrenProps {
	/**
	 * The placement of the floating component relative to the reference element
	 */
	placement: Placement;
	/**
	 * Whether the floating component is open or not
	 */
	open: boolean;
}

/**
 *
 * @category Props
 */
export interface FloatingProps extends PropsWithChildren {
	/**
	 * Whether the floating component is open or not at initial render (uncontrolled mode) (if you want to control the floating component from outside, use the `open` and `setOpen` props)
	 * @default `false`
	 * @see https://reactjs.org/docs/uncontrolled-components.html
	 * @see https://reactjs.org/docs/forms.html#controlled-components
	 */
	initialOpen?: boolean;
	/**
	 * The reference element (can be a ReactNode or a function that returns a JSX element)
	 */
	floatingComponent?: React.ReactNode | ((props: FloatingChildrenProps) => JSX.Element);
	/**
	 * Whether to disable the portal or not (useful when you want to use the floating component inside a portal)
	 * @default `false`
	 * @see https://reactjs.org/docs/portals.html
	 */
	disablePortal?: boolean;
	/**
	 * floating ui middleware (useful when you want to add custom behaviors to the floating component)
	 * @see https://floating-ui.com/docs/middlewares
	 */
	middleware?: (false | Middleware | null | undefined)[] | undefined;
	/**
	 * Whether the floating component is open or not (controlled mode) (if you want to control the floating component from inside, use the `initialOpen` prop)
	 * @default `null`
	 */
	open?: boolean | null;
	/**
	 * The function to call when the floating component open state changes (controlled mode) (if you want to control the floating component from inside, use the `initialOpen` prop)
	 * @param {boolean} open - Whether the new floating component open state will be open or not
	 */
	setOpen?: (open: boolean) => void;
	/**
	 * The placement of the floating component relative to the reference element
	 * @default `bottom`
	 * @see https://floating-ui.com/docs/placement
	 */
	placement?: Placement;
	/**
	 * The strategy to use to position the floating component (useful when you want to change the floating component position when the reference element is out of the viewport)
	 * @default `absolute`
	 * @see https://floating-ui.com/docs/strategies
	 */
	strategy?: Strategy;
	/**
	 * Framer Motion animate presence props (useful when you want to customize the floating component animation)
	 * @see https://www.framer.com/api/motion/animate-presence/
	 */
	animatePresenceProps?: AnimatePresenceProps;
	/**
	 * Framer Motion motion props (useful when you want to customize the floating component animation)
	 * @default `{initial: {opacity: 0}, animate: {opacity: 1}, exit: {opacity: 0}}`
	 * @see https://www.framer.com/api/motion/motion/
	 */
	animateProps?: MotionProps;
	/**
	 * floating ui useHover props (if floating component is in controlled mode, `enabled` prop will be ignored)
	 * @see https://floating-ui.com/docs/useHover
	 */
	hoverProps?: Parameters<typeof useHover>[1];
	/**
	 * floating ui useFocus props (if floating component is in controlled mode, `enabled` prop will be ignored)
	 * @see https://floating-ui.com/docs/useFocus
	 */
	focusProps?: Parameters<typeof useFocus>[1];
	/**
	 * floating ui useRole props (if floating component is in controlled mode, `enabled` prop will be ignored)
	 * @see https://floating-ui.com/docs/useRole
	 */
	roleProps?: Parameters<typeof useRole>[1];
	/**
	 * floating ui useDismiss props (if floating component is in controlled mode, `enabled` prop will be ignored)
	 * @see https://floating-ui.com/docs/useDismiss
	 */
	dismissProps?: Parameters<typeof useDismiss>[1];
	/**
	 * floating ui useClick props (if floating component is in controlled mode, `enabled` prop will be ignored)
	 * @see https://floating-ui.com/docs/useClick
	 */
	clickProps?: Parameters<typeof useClick>[1];
	/**
	 * Root element of the reference element
	 * @default `div`
	 */
	root?: ElementType;
	/**
	 * Whether use arrow in middleware or not
	 */
	arrow?: ArrowProps & {
		/**
		 * Whether the arrow is enabled or not
		 */
		enabled?: boolean;
		/**
		 * The padding of the arrow
		 */
		padding?: number | SideObject;
	};
	/**
	 * The style of the floating component (useful when you want to customize the floating component style)
	 * @default `{}`
	 */
	floatingStyle?: MotionStyle;
	/**
	 * The function to call when the floating component open state changes (uncontrolled mode) (if you want to control the floating component from outside, use the `open` and `setOpen` props)
	 * @param {boolean} open - Whether the new floating component open state was true or not
	 */
	onToggle?: (open: boolean) => void;
}

/**
 * @category Refs
 * @example
 * ```jsx
 * const floatingRef = useRef<FloatingRef>(null);
 * return <Floating ref={floatingRef} />;
 * ```
 */
export interface FloatingRef {
	/**
	 * Update the floating component position (useful when the reference element position changes)
	 */
	update: () => void;
	/**
	 * Open the floating component (if it's not controlled)
	 */
	open: boolean;
}
