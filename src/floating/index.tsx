import {Middleware} from '@floating-ui/core';
import {
	arrow as arrowMiddleware,
	autoUpdate,
	FloatingNode,
	FloatingPortal,
	useClick,
	useDismiss,
	useFloating,
	useFloatingNodeId,
	useFocus,
	useHover,
	useInteractions,
	useRole,
} from '@floating-ui/react';
import {AnimatePresence, motion} from 'framer-motion';
import {forwardRef, Fragment, memo, useImperativeHandle, useLayoutEffect, useMemo, useState} from 'react';
import {FloatingProps} from '../@types';
import Arrow from '../arrow';

export interface FloatingRef {
	update: () => void;
	open: boolean;
}

const defaultArrowProps = {
	size: 8,
};

const Floating = forwardRef<FloatingRef, FloatingProps>(
	(
		{
			initialOpen = false,
			disablePortal = false,
			floatingComponent,
			open: controlledOpen = null,
			setOpen: setControlledOpen,
			placement: defaultPlacement = 'bottom',
			middleware,
			children,
			strategy = 'absolute',
			animatePresenceProps,
			animateProps = {
				initial: {opacity: 0},
				animate: {opacity: 1},
				exit: {opacity: 0},
			},
			hoverProps,
			focusProps,
			roleProps,
			dismissProps,
			clickProps,
			root = 'div',
			arrow,
			floatingStyle = {},
		},
		ref,
	) => {
		const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
		const open = controlledOpen ?? uncontrolledOpen;
		const setOpen = setControlledOpen ?? setUncontrolledOpen;

		const [anchorElement, setAnchorElement] = useState<HTMLSpanElement | null>();
		const [floatingElement, setFloatingElement] = useState<HTMLSpanElement | null>();
		const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>();

		const nodeId = useFloatingNodeId();

		const resolvedMiddleware = useMemo(() => {
			let newResolvedMiddleware: (false | Middleware | null | undefined)[] = [];
			if (Array.isArray(middleware) && middleware?.length)
				newResolvedMiddleware = newResolvedMiddleware.concat(middleware);
			arrow?.enabled &&
				arrowElement &&
				newResolvedMiddleware.push(
					arrowMiddleware({
						element: arrowElement,
						padding: arrow.padding,
					}),
				);
			return newResolvedMiddleware;
		}, [arrow, arrowElement, middleware]);

		const {x, y, reference, floating, context, update, middlewareData, placement} = useFloating({
			nodeId,
			placement: defaultPlacement,
			middleware: resolvedMiddleware,
			strategy: strategy,
			whileElementsMounted(...args) {
				const cleanup = autoUpdate(...args, {animationFrame: true});
				// Important! Always return the cleanup function.
				return cleanup;
			},
			open,
			onOpenChange: setOpen,
		});

		const arrowStyle = useMemo(() => {
			const side = placement.split('-')[0];

			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right',
			}[side];

			if (middlewareData.arrow) {
				const {x, y} = middlewareData.arrow;
				return {
					left: x != null ? `${x}px` : '',
					top: y != null ? `${y}px` : '',
					// Ensure the static side gets unset when
					// flipping to other placements' axes.
					right: '',
					bottom: '',
					[staticSide as 'bottom' | 'left' | 'top' | 'right']: `${-(arrow?.size || defaultArrowProps.size) / 2}px`,
				};
			}
			return undefined;
		}, [arrow, middlewareData.arrow, placement]);

		const click = useClick(context, {...clickProps, enabled: controlledOpen !== null ? false : clickProps?.enabled});
		const hover = useHover(context, {
			move: false,
			...hoverProps,
			enabled: controlledOpen !== null ? false : hoverProps?.enabled,
		});
		const focus = useFocus(context, {...focusProps, enabled: controlledOpen !== null ? false : focusProps?.enabled});
		const role = useRole(context, {...roleProps, enabled: controlledOpen !== null ? false : roleProps?.enabled});
		const dismiss = useDismiss(context, {
			...dismissProps,
			enabled: controlledOpen !== null ? false : dismissProps?.enabled,
		});

		const {getReferenceProps, getFloatingProps} = useInteractions([click, hover, focus, role, dismiss]);

		useLayoutEffect(() => {
			if (anchorElement) reference(anchorElement);
		}, [anchorElement, reference]);

		useLayoutEffect(() => {
			if (floatingElement) floating(floatingElement);
		}, [floating, floatingElement]);

		const renderFloatingComponent = () => {
			return typeof floatingComponent === 'function' ? floatingComponent({open, placement}) : floatingComponent;
		};

		const Portal = useMemo(() => {
			return disablePortal ? Fragment : FloatingPortal;
		}, [disablePortal]);

		useImperativeHandle(
			ref,
			() => ({
				update,
				open,
			}),
			[update, open],
		);

		const Root = root;

		return (
			<>
				<Root ref={setAnchorElement} {...getReferenceProps()}>
					{children}
				</Root>
				<FloatingNode id={nodeId}>
					<Portal>
						<AnimatePresence initial={false} {...animatePresenceProps}>
							{open && (
								<motion.div
									{...animateProps}
									ref={setFloatingElement}
									style={{
										position: strategy,
										top: y ?? 0,
										left: x ?? 0,
										width: 'max-content',
										display: 'flex',
										visibility: x === null ? 'hidden' : undefined,
										boxSizing: 'border-box',
										zIndex: 1,
										transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0s',
										...floatingStyle,
									}}
									{...getFloatingProps()}
								>
									{arrow?.enabled && (
										<Arrow
											ref={setArrowElement}
											className={arrow.className}
											size={arrow.size}
											style={{
												...arrow.style,
												...arrowStyle,
											}}
										/>
									)}
									{renderFloatingComponent()}
								</motion.div>
							)}
						</AnimatePresence>
					</Portal>
				</FloatingNode>
			</>
		);
	},
);

Floating.displayName = 'Floating';
const MemoizedFloating = memo(Floating);
export {MemoizedFloating as Floating};
