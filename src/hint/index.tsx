import {cloneElement, memo, useCallback, useLayoutEffect, useMemo, useState} from 'react';
import {HintProps} from '../@types';
import {Popover as PopoverComponent} from '../popover';
import ReactDOMServer from 'react-dom/server';
import {generateHash} from '../utils/hashGenerator';
import {Floating} from '../floating';
import {FillBeacon, OutlineBeacon} from '../beacons';
import {flip, offset, shift} from '@floating-ui/react';
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

const Hint = ({
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
}: HintProps) => {
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
		setBeaconWidth({width: beaconRef?.offsetWidth || 0, height: beaconRef?.offsetHeight || 0});
	}, [beaconRef]);

	const resolvedUniqueKey = useMemo(() => {
		if (uniqueKey) return uniqueKey.toString();
		return generateHash(ReactDOMServer.renderToStaticMarkup(renderedPopover) + hit);
	}, [uniqueKey, renderedPopover, hit]);

	useLayoutEffect(() => {
		if (hit === 'always') {
			setOpen(true);
			return;
		}
		const {occurred} = manageHit(resolvedUniqueKey);

		if (occurred < hit) {
			setOpen(true);
		}
	}, [hit, resolvedUniqueKey]);

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
				middleware={restPopoverProps.middleware?.length ? restPopoverProps.middleware : [offset(10), shift(), flip()]}
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
			]}
			animatePresenceProps={{initial: true, ...restBeaconProps.animatePresenceProps}}
			floatingComponent={floatingPopover}
			setOpen={setOpen}
			open={open}
		>
			{children}
		</Floating>
	);
};

const MemoizedHint = memo(Hint);
export {MemoizedHint as Hint};
