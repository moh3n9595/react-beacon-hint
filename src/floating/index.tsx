/**
 * @module Floating
 */
import {
	ElementType,
	forwardRef,
	Fragment,
	memo,
	PropsWithChildren,
	ReactNode,
	useEffect,
	useImperativeHandle,
	useMemo,
	useState,
} from 'react';

import {
	FloatingNode,
	FloatingPortal,
	useFloating,
	useFloatingNodeId,
	arrow as arrowMiddleware,
	FloatingArrow,
	type FloatingArrowProps,
	type SideObject,
	type Placement,
	type Strategy,
	useHover,
	useFocus,
	useRole,
	useDismiss,
	useClick,
	useInteractions,
	type UseFloatingOptions,
	type MiddlewareData,
	autoUpdate,
	useFloatingParentNodeId,
	FloatingTree,
	hide,
	useTransitionStyles,
	type UseTransitionStylesProps,
	type Middleware,
} from '@floating-ui/react';

import {useSkipMountEffect} from '../hooks/useSkipMountEffect';

/**
 *
 * @category Props
 */
export interface FloatingProps extends PropsWithChildren {
	/**
	 * The root element of the floating component
	 * @default `'div'`
	 */
	Root?: ElementType;
	/**
	 * Whether to render the floating component in a portal
	 * @default `true`
	 * @see https://reactjs.org/docs/portals.html
	 */
	portal?: boolean;
	/**
	 * Whether the floating component is open or not at initial render (uncontrolled mode) (if you want to control the floating component from outside, use the `open` and `setOpen` props)
	 * @default `false`
	 * @see https://reactjs.org/docs/uncontrolled-components.html
	 */
	initialOpen?: boolean;
	/**
	 * Whether the floating component is open or not
	 * @default `null`
	 * @see https://reactjs.org/docs/forms.html#controlled-components
	 */
	open?: boolean | null;
	/**
	 * Manually set the open state of the floating component (useful when the floating component is controlled from outside)
	 * @param {boolean} open - The new open state
	 */
	setOpen?: (open: boolean) => void;
	/**
	 * The function to call when the floating component open state changes (uncontrolled mode) (if you want to control the floating component from outside, use the `open` and `setOpen` props)
	 * @param {boolean} open - Whether the new floating component open state was true or not
	 */
	onToggle?: (open: boolean) => void;
	/**
	 * The floating component to render (can be a string, a ReactNode, or a function that returns a ReactNode)
	 * @example
	 * ```jsx
	 * <Floating floatingComponent='Hello world' />
	 * ```
	 * @example
	 * ```jsx
	 * <Floating floatingComponent={(open, placement) => <div>{open ? 'Hello world' : 'Goodbye world'}</div>} />
	 * ```
	 */
	floatingComponent?: ReactNode | ((props: FloatingChildrenProps) => ReactNode);
	/**
	 * The arrow to display in the floating component
	 */
	arrow?: Omit<FloatingArrowProps, 'context'> & {
		/**
		 * Whether to render the arrow or not
		 */
		enabled?: boolean;
		/**
		 * The padding of the arrow
		 */
		padding?: number | SideObject;
		/**
		 * Styles for the arrow based on middleware data
		 * @param {MiddlewareData} middlewareData - The middleware data
		 * @returns {React.CSSProperties} The styles for the arrow
		 */
		middlewareDataArrowStyles?: (
			middlewareData: MiddlewareData,
		) => React.CSSProperties;
	};
	/**
	 * The placement of the floating component relative to the reference element
	 * @default `'bottom'`
	 */
	placement?: Placement;
	/**
	 * The strategy to use for positioning the floating component
	 * @default `'absolute'`
	 */
	strategy?: Strategy;
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
	 * The middleware to use for the floating component (useful when you want to add custom behaviors to the floating component)
	 * @see https://floating-ui.com/docs/middleware
	 */
	middleware?: UseFloatingOptions['middleware'];
	/**
	 * Styles for the floating component based on middleware data
	 * @param {MiddlewareData} middlewareData - The middleware data
	 * @returns {React.CSSProperties} The styles for the floating component
	 */
	middlewareDataFloatingStyles?: (
		middlewareData: MiddlewareData,
	) => React.CSSProperties;
	/**
	 * The props for the floating component transition
	 * @see https://floating-ui.com/docs/useTransitionStyles
	 */
	transitionProps?: UseTransitionStylesProps;
	/**
	 * Whether to use the hide middleware or not
	 * @default `true`
	 * @see https://floating-ui.com/docs/middleware/hide
	 */
	hideMiddleware?: boolean;
}

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
	 * Manually set the open state of the floating component
	 * @param {boolean} open - The new open state
	 * @example
	 * ```jsx
	 * floatingRef.current?.setOpen(true);
	 * ```
	 */
	setOpen: FloatingProps['setOpen'];
}

const nestedHide = (): Middleware => ({
	name: 'nestedHide',
	fn({elements}) {
		const reference = elements.reference;
		// Read computed styles to determine if the reference is effectively hidden.
		const computedStyle = window.getComputedStyle(reference as Element);
		const isHidden = computedStyle.visibility === 'hidden';
		return {
			data: {
				isHidden,
			},
		};
	},
});

const Floating = forwardRef<FloatingRef, FloatingProps>(
	(
		{
			Root = 'div',
			children,
			portal = true,
			initialOpen = false,
			onToggle,
			open: controlledOpen = null,
			setOpen: setControlledOpen,
			floatingComponent,
			arrow,
			placement: defaultPlacement = 'bottom',
			strategy = 'absolute',
			hoverProps,
			focusProps,
			roleProps,
			dismissProps,
			clickProps,
			middleware,
			middlewareDataFloatingStyles = (middlewareData) => ({
				/* c8 ignore start */
				visibility:
					middlewareData?.hide?.escaped ||
					middlewareData?.hide?.referenceHidden ||
					middlewareData.nestedHide?.isHidden
						? 'hidden'
						: 'visible',
			}),
			/* c8 ignore stop */
			transitionProps,
			hideMiddleware = true,
		},
		ref,
	) => {
		const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
		const open = controlledOpen ?? uncontrolledOpen;
		const setOpen = setControlledOpen ?? setUncontrolledOpen;
		const [arrowEl, setArrowEl] = useState<SVGSVGElement | null>(null);

		useSkipMountEffect(() => {
			onToggle?.(open);
		}, [onToggle, open]);

		const parentId = useFloatingParentNodeId();
		const nodeId = useFloatingNodeId();

		const {
			refs,
			floatingStyles,
			context,
			placement,
			update,
			middlewareData,
			isPositioned,
		} = useFloating({
			nodeId,
			middleware: [
				...(middleware || []),
				arrow?.enabled &&
					arrowMiddleware({
						element: arrowEl,
						padding: arrow?.padding,
					}),
				hideMiddleware &&
					!middleware?.find((i) => !!i && i?.name === 'hide') &&
					hide((state) => ({
						strategy: 'escaped',
						padding: {
							bottom: state.rects.floating.height / 2,
							top: state.rects.floating.height / 2,
							left: state.rects.floating.width / 2,
							right: state.rects.floating.width / 2,
						},
					})),
				hideMiddleware &&
					!middleware?.find((i) => !!i && i?.name === 'nestedHide') &&
					!!parentId &&
					nestedHide(),
			],
			placement: defaultPlacement,
			strategy: strategy,
			open,
			onOpenChange: setOpen,
			whileElementsMounted(...args) {
				const cleanup = autoUpdate(...args, {animationFrame: true});
				// Important! Always return the cleanup function.
				return cleanup;
			},
		});

		useEffect(() => {
			if (arrowEl) update();
		}, [arrowEl, update]);

		useEffect(() => {
			if (isPositioned) update();
		}, [isPositioned, update]);

		const {isMounted, styles} = useTransitionStyles(context, transitionProps);

		const click = useClick(context, {
			...clickProps,
			enabled: controlledOpen !== null ? false : clickProps?.enabled,
		});
		const hover = useHover(context, {
			move: false,
			...hoverProps,
			enabled: controlledOpen !== null ? false : hoverProps?.enabled,
		});
		const focus = useFocus(context, {
			...focusProps,
			enabled: controlledOpen !== null ? false : focusProps?.enabled,
		});
		const role = useRole(context, {
			...roleProps,
			enabled: controlledOpen !== null ? false : roleProps?.enabled,
		});
		const dismiss = useDismiss(context, {
			...dismissProps,
			enabled: controlledOpen !== null ? false : dismissProps?.enabled,
		});
		const {getReferenceProps, getFloatingProps} = useInteractions([
			click,
			hover,
			focus,
			role,
			dismiss,
		]);

		const Portal = useMemo(() => {
			return !portal ? Fragment : FloatingPortal;
		}, [portal]);

		const renderFloatingComponent = () => {
			return typeof floatingComponent === 'function'
				? floatingComponent({open, placement})
				: floatingComponent;
		};

		const Tree = useMemo(
			() => (parentId === null ? FloatingTree : Fragment),
			[parentId],
		);

		useImperativeHandle(
			ref,
			() => ({
				update,
				setOpen,
			}),
			[update, setOpen],
		);

		return (
			<>
				<Root ref={refs.setReference} {...getReferenceProps()}>
					{children}
				</Root>
				<Tree>
					<FloatingNode id={nodeId}>
						<Portal>
							{isMounted && (
								<Root
									data-testid='floating-root'
									ref={refs.setFloating}
									style={{
										display: !isPositioned ? 'none' : 'flex',
										...floatingStyles,
										...middlewareDataFloatingStyles?.(middlewareData),
									}}
									{...getFloatingProps()}
								>
									<Root
										style={{
											display: 'flex',
											...styles,
										}}
									>
										{arrow?.enabled && (
											<FloatingArrow
												data-testid='floating-arrow'
												ref={setArrowEl}
												{...arrow}
												context={context}
												style={{
													...(arrow?.style || {}),
													...(arrow?.middlewareDataArrowStyles?.(
														middlewareData,
													) || {}),
												}}
											/>
										)}
										{renderFloatingComponent()}
									</Root>
								</Root>
							)}
						</Portal>
					</FloatingNode>
				</Tree>
			</>
		);
	},
);

Floating.displayName = 'Floating';
/**
 * This component is used to create a floating element that can be positioned relative to another element. It uses the `useFloating` hook internally.
 * @category Components
 * @example
 * ```jsx
 * <Floating
 * 	floatingComponent={<div>floating</div>}
 * 	placement="bottom-start"
 * 	open={open}
 * 	setOpen={setOpen}
 * >
 * 	{anchorElement}
 * </Floating>
 * ```
 */
const MemoizedFloating = memo(Floating);
export {MemoizedFloating as Floating};
