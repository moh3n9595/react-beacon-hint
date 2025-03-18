/**
 * @module Hint
 */
import {
	cloneElement,
	forwardRef,
	memo,
	PropsWithChildren,
	ReactElement,
	useCallback,
	useImperativeHandle,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react';

import {autoPlacement, offset} from '@floating-ui/react';
import {renderToStaticMarkup} from 'react-dom/server';

import {FillBeacon, OutlineBeacon} from '../beacon';
import {COLORS} from '../constants';
import {Floating, FloatingProps} from '../floating';
import {useSkipMountEffect} from '../hooks/useSkipMountEffect';
import {Popover as PopoverComponent} from '../popover';
import {generateHash} from '../utils/hashGenerator';
import {HitStorageManager} from '../utils/hitStorageManager';

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
	popover: string | ReactElement;
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
	 * @default `autoOffset: true`
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
	 * @default `arrow: {enabled: true, width: 10, height: 5, fill: COLORS.POPOVER}, hoverProps: {enabled: false}`
	 */
	popoverProps?: Omit<FloatingProps, 'initialOpen' | 'floatingComponent'>;
	/**
	 * The beacon to display (can be `fill`, `outline` or a ReactElement)
	 * @default `outline`
	 */
	beacon?: 'fill' | 'outline' | ReactElement;
}

/**
 * @category Refs
 * @example
 * ```jsx
 * const hintRef = useRef<HintRef>(null);
 * useEffect(() => {
 * 	hintRef.current?.start();
 * }, []);
 * return <Hint ref={hintRef} />;
 * ```
 */
export interface HintRef {
	/**
	 * Start the hint manually if autoStart is false
	 */
	start: () => void;
}

const Hint = forwardRef<HintRef, HintProps>(
	(
		{
			autoStart = true,
			popover,
			popoverProps: {
				arrow = {enabled: true, width: 10, height: 5, fill: COLORS.POPOVER},
				hoverProps = {enabled: false},
				onToggle,
				...restPopoverProps
			} = {
				arrow: {enabled: true, width: 10, height: 5, fill: COLORS.POPOVER},
				hoverProps: {enabled: false},
			},
			children,
			uniqueKey,
			hit = 'always',
			beaconProps: {autoOffset = true, ...restBeaconProps} = {autoOffset: true},
			beacon = 'outline',
		},
		ref,
	) => {
		const [open, setOpen] = useState(false);
		const [beaconRef, setBeaconRef] = useState<HTMLElement | null>();
		const [beaconWidth, setBeaconWidth] = useState({width: 0, height: 0});

		const renderedPopover = useMemo(() => {
			if (typeof popover === 'string')
				return <PopoverComponent text={popover} />;
			return popover;
		}, [popover]);

		const renderedBeacon = useMemo(() => {
			if (beacon === 'fill') return <FillBeacon ref={setBeaconRef} />;
			if (beacon === 'outline') return <OutlineBeacon ref={setBeaconRef} />;
			return cloneElement(beacon, {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				ref: setBeaconRef,
			});
		}, [beacon]);

		useSkipMountEffect(() => {
			setBeaconWidth({
				width: beaconRef?.getBoundingClientRect().width || 0,
				height: beaconRef?.getBoundingClientRect().height || 0,
			});
		}, [beaconRef]);

		const resolvedUniqueKey = useMemo(() => {
			if (uniqueKey) return uniqueKey.toString();
			return generateHash(renderToStaticMarkup(renderedPopover) + hit);
		}, [uniqueKey, renderedPopover, hit]);

		const start = useCallback(() => {
			if (hit === 'always') {
				setOpen(true);
				return;
			}
			const {occurred} = HitStorageManager.get(resolvedUniqueKey);

			if (occurred < hit) {
				setOpen(true);
			}
		}, [hit, resolvedUniqueKey]);

		useImperativeHandle(ref, () => ({
			start,
		}));

		useLayoutEffect(() => {
			if (autoStart) start();
		}, [autoStart, start]);

		const onTogglePopover = useCallback(
			(open: boolean) => {
				onToggle?.(open);

				if (open && hit !== 'always') {
					HitStorageManager.increase(resolvedUniqueKey);
				} else if (!open && hit !== 'always') {
					const {occurred} = HitStorageManager.get(resolvedUniqueKey);
					if (occurred >= hit) setOpen(false);
				}
			},
			[hit, onToggle, resolvedUniqueKey],
		);

		const floatingPopover = useMemo(() => {
			return (
				<Floating
					{...restPopoverProps}
					arrow={arrow}
					middleware={
						restPopoverProps.middleware?.length
							? restPopoverProps.middleware
							: [offset(10), autoPlacement()]
					}
					floatingComponent={renderedPopover}
					hoverProps={hoverProps}
					onToggle={onTogglePopover}
				>
					{renderedBeacon}
				</Floating>
			);
		}, [
			arrow,
			hoverProps,
			onTogglePopover,
			renderedBeacon,
			renderedPopover,
			restPopoverProps,
		]);

		return (
			<Floating
				{...restBeaconProps}
				middleware={[
					...(restBeaconProps.middleware || []),
					autoOffset &&
						offset({
							mainAxis: -0.5 * beaconWidth.width,
							alignmentAxis: -0.5 * beaconWidth.height,
						}),
				]}
				floatingComponent={floatingPopover}
				setOpen={setOpen}
				open={open}
			>
				{children}
			</Floating>
		);
	},
);

Hint.displayName = 'Hint';
/**
 * Hint component is used to show a popover on hover or click of a beacon. It is used to guide the user through the application.
 * @category Components
 * @example
 * ```jsx
 * <Hint popover="Hello World" hit={1}>
 * 	<Button>Hover Me</Button>
 * </Hint>
 * ```
 */
const MemoizedHint = memo(Hint);
export {MemoizedHint as Hint};
