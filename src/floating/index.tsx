import {
	autoUpdate,
	FloatingPortal,
	useClick,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useRole,
} from '@floating-ui/react';
import {AnimatePresence, motion} from 'framer-motion';
import {forwardRef, Fragment, memo, useImperativeHandle, useLayoutEffect, useMemo, useState} from 'react';
import {FloatingProps} from '../@types';

export interface FloatingRef {
	update: () => void;
	open: boolean;
}

const Floating = forwardRef<FloatingRef, FloatingProps>(
	(
		{
			initialOpen = false,
			disablePortal = false,
			floatingComponent,
			open: controlledOpen = null,
			setOpen: setControlledOpen,
			placement = 'bottom',
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
		},
		ref,
	) => {
		const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
		const open = controlledOpen ?? uncontrolledOpen;
		const setOpen = setControlledOpen ?? setUncontrolledOpen;

		const [anchorElement, setAnchorElement] = useState<HTMLSpanElement | null>();
		const [popperElement, setPopperElement] = useState<HTMLSpanElement | null>();

		const {x, y, reference, floating, context, update} = useFloating({
			placement: placement,
			middleware: middleware,
			strategy: strategy,
			whileElementsMounted(...args) {
				const cleanup = autoUpdate(...args, {animationFrame: true});
				// Important! Always return the cleanup function.
				return cleanup;
			},
			open,
			onOpenChange: setOpen,
		});

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
			if (popperElement) floating(popperElement);
		}, [floating, popperElement]);

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
				<Portal>
					<AnimatePresence initial={false} {...animatePresenceProps}>
						{open && (
							<motion.div
								{...animateProps}
								ref={setPopperElement}
								style={{
									position: strategy,
									top: y ?? 0,
									left: x ?? 0,
									width: 'max-content',
									display: 'flex',
									visibility: x === null ? 'hidden' : undefined,
								}}
								{...getFloatingProps()}
							>
								{renderFloatingComponent()}
							</motion.div>
						)}
					</AnimatePresence>
				</Portal>
			</>
		);
	},
);

Floating.displayName = 'Floating';
const MemoizedFloating = memo(Floating);
export {MemoizedFloating as Floating};
