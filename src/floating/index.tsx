import {Middleware} from '@floating-ui/core';
import {
	arrow as arrowMiddleware,
	autoUpdate,
	FloatingNode,
	FloatingPortal,
	FloatingTree,
	hide,
	useClick,
	useDismiss,
	useFloating,
	useFloatingNodeId,
	useFloatingParentNodeId,
	useFocus,
	useHover,
	useInteractions,
	useRole,
} from '@floating-ui/react';
import {AnimatePresence, motion} from 'framer-motion';
import {forwardRef, Fragment, memo, useImperativeHandle, useLayoutEffect, useMemo, useState} from 'react';
import {FloatingProps, FloatingRef} from '../@types';
import {Arrow} from '../arrow';
import {useSkipMountEffect} from '../utils/useSkipMountEffect';

const defaultArrowProps = {
	size: 8,
};

const Floating = forwardRef<FloatingRef, FloatingProps>(
	(
		{
			initialOpen = false,
			onToggle,
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

		useSkipMountEffect(() => {
			onToggle && onToggle(open);
		}, [onToggle, open]);

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

			newResolvedMiddleware.push(hide());
			newResolvedMiddleware.push(
				hide({
					strategy: 'escaped',
				}),
			);

			return newResolvedMiddleware;
		}, [arrow, arrowElement, middleware]);

		const {x, y, reference, floating, context, update, middlewareData, placement} = useFloating({
			nodeId,
			placement: defaultPlacement,
			middleware: resolvedMiddleware,
			strategy,
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

		const visibility = useMemo(() => {
			/* c8 ignore start */
			if (
				x === null ||
				(process.env.VITEST_WORKER_ID === undefined &&
					(middlewareData?.hide?.referenceHidden || middlewareData?.hide?.escaped))
			)
				return 'hidden';
			return undefined;
			/* c8 ignore stop */
		}, [middlewareData.hide, x]);

		const Root = root;

		const parentId = useFloatingParentNodeId();

		const Tree = useMemo(() => (parentId === null ? FloatingTree : Fragment), [parentId]);

		return (
			<>
				<Root style={{display: 'flex'}} ref={setAnchorElement} {...getReferenceProps()}>
					{children}
				</Root>
				<Tree>
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
											visibility,
											boxSizing: 'border-box',
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
				</Tree>
			</>
		);
	},
);

Floating.displayName = 'Floating';

/**
 *
 * @category Components
 */
const MemoizedFloating = memo(Floating);
export {MemoizedFloating as Floating};
