import {
	cloneElement,
	forwardRef,
	memo,
	useCallback,
	useImperativeHandle,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react';
import {HintProps, HintRef} from '../@types';
import {Popover as PopoverComponent} from '../popover';
import {renderToStaticMarkup} from 'react-dom/server';
import {generateHash} from '../utils/hashGenerator';
import {Floating} from '../floating';
import {FillBeacon, OutlineBeacon} from '../beacons';
import {flip, hide, offset, shift} from '@floating-ui/react';
import {manageHit} from '../utils/hitManager';
import {useSkipMountEffect} from '../utils/useSkipMountEffect';

const defaultRestPopoverPropsAnimateProps = {
	initial: {
		scale: 0,
		opacity: 0,
	},
	animate: {
		scale: [0, 1],
		opacity: [0, 1],
	},
	exit: {
		scale: [1, 0],
		opacity: [1, 0],
	},
	transition: {
		duration: 0.25,
		times: [0, 1],
	},
};

const Hint = forwardRef<HintRef, HintProps>(
	(
		{
			autoStart = true,
			popover,
			popoverProps: {arrow = {enabled: true}, hoverProps = {enabled: false}, onToggle, ...restPopoverProps} = {
				arrow: {enabled: true},
				hoverProps: {enabled: false},
			},
			uniqueKey,
			hit = 'always',
			children,
			beaconProps: {autoOffset = true, ...restBeaconProps} = {autoOffset: true},
			beacon = 'outline',
		},
		ref,
	) => {
		const [open, setOpen] = useState(false);
		const [beaconRef, setBeaconRef] = useState<HTMLElement | null>();
		const [beaconWidth, setBeaconWidth] = useState({width: 0, height: 0});

		const renderedPopover = useMemo(() => {
			if (typeof popover === 'string') return <PopoverComponent text={popover} />;
			return popover;
		}, [popover]);

		const renderedBeacon = useMemo(() => {
			if (beacon === 'fill') return <FillBeacon ref={setBeaconRef} />;
			if (beacon === 'outline') return <OutlineBeacon ref={setBeaconRef} />;
			return cloneElement(beacon, {
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
			const {occurred} = manageHit(resolvedUniqueKey);

			if (occurred < hit) {
				setOpen(true);
			}
		}, [hit, resolvedUniqueKey]);

		useImperativeHandle(ref, () => ({
			start,
		}));

		useLayoutEffect(() => {
			autoStart && start();
		}, [autoStart, start]);

		const onTogglePopover = useCallback(
			(open: boolean) => {
				onToggle && onToggle(open);

				if (open && hit !== 'always') {
					manageHit(resolvedUniqueKey, {increase: true});
				} else if (!open && hit !== 'always') {
					const {occurred} = manageHit(resolvedUniqueKey);
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
						restPopoverProps.middleware?.length ? restPopoverProps.middleware : [offset(10), shift(), flip(), hide()]
					}
					floatingComponent={renderedPopover}
					hoverProps={hoverProps}
					onToggle={onTogglePopover}
					animateProps={
						restPopoverProps.animateProps ? restPopoverProps.animateProps : defaultRestPopoverPropsAnimateProps
					}
				>
					{renderedBeacon}
				</Floating>
			);
		}, [arrow, hoverProps, onTogglePopover, renderedBeacon, renderedPopover, restPopoverProps]);

		return (
			<Floating
				{...restBeaconProps}
				middleware={[
					...(restBeaconProps.middleware || []),
					autoOffset && offset({mainAxis: -0.5 * beaconWidth.width, alignmentAxis: -0.5 * beaconWidth.height}),
					hide(),
				]}
				animatePresenceProps={{initial: true, ...restBeaconProps.animatePresenceProps}}
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
const MemoizedHint = memo(Hint);
export {MemoizedHint as Hint};
