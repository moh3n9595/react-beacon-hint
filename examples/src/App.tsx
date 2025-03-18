// import {
// 	flip,
// 	FloatingTree,
// 	limitShift,
// 	offset,
// 	shift,
// } from '@floating-ui/react';
import {useEffect, useRef, useState} from 'react';

import {
	autoPlacement,
	flip,
	limitShift,
	offset,
	shift,
} from '@floating-ui/react';
import {
	FillBeacon,
	Floating,
	Hint,
	HintRef,
	// Hint,
	// HintRef,
	OutlineBeacon,
	Popover,
} from 'react-beacon-hint';
import 'react-beacon-hint/styles.css';

import './App.scss';

function App() {
	const [popperElemSevenIsVisible, setPopperElemSevenIsVisible] =
		useState(false);
	const [popperElemEightIsVisible, setPopperElemEightIsVisible] =
		useState(false);

	const nineRef = useRef<HintRef>(null);

	useEffect(() => {
		setTimeout(() => {
			nineRef.current?.start();
		}, 10000);
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setPopperElemSevenIsVisible((prev) => !prev);
		}, 2000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setPopperElemEightIsVisible((prev) => !prev);
		}, 2000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className='App'>
			<header>
				<img src='/beacon.svg' className='logo' alt='logo' /> React Beacon Hint
			</header>
			<div className='card'>
				<span className='title'>Outline Beacon</span>
				<div className='content'>
					<div className='content-item'>
						<div className='component'>
							<OutlineBeacon size={50} />
						</div>
						<code>size={50}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<OutlineBeacon />
						</div>
						<code>default</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<OutlineBeacon color='green' />
						</div>
						<code>{"color='green'"}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<OutlineBeacon style={{opacity: 0.5}} />
						</div>
						<code>{'style={{opacity: 0.5}}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<OutlineBeacon className='test-class' />
						</div>
						<code>{"className='test-class'"}</code>
					</div>
				</div>
			</div>
			<div className='card'>
				<span className='title'>Fill Beacon</span>
				<div className='content'>
					<div className='content-item'>
						<div className='component'>
							<FillBeacon size={40} />
						</div>
						<code>size={50}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<FillBeacon />
						</div>
						<code>default</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<FillBeacon color='green' />
						</div>
						<code>{"color='green'"}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<FillBeacon style={{opacity: 0.5}} />
						</div>
						<code>{'style={{opacity: 0.5}}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<FillBeacon className='test-class' />
						</div>
						<code>{"className='test-class'"}</code>
					</div>
				</div>
			</div>
			<div className='card'>
				<span className='title'>Floating</span>
				<div className='content scrollable'>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<OutlineBeacon />}
								placement='right'
								open
							>
								<div className='box'>One</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<OutlineBeacon />}'}</code>
						<code>{"placement='right'"}</code>
						<code>{'open'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<OutlineBeacon />}
								placement='left-start'
								open
							>
								<div className='box'>Two</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<OutlineBeacon />}'}</code>
						<code>{"placement='left-start'"}</code>
						<code>{'open'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<FillBeacon />}
								placement='right-end'
								open
							>
								<div className='box'>Three</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='right-end'"}</code>
						<code>{'open'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<OutlineBeacon />}
								placement='left'
								open={false}
							>
								<div className='box'>Four</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<OutlineBeacon />}'}</code>
						<code>{"placement='left'"}</code>
						<code>{'open={false}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<FillBeacon />}
								placement='left'
								open
								portal={false}
								middleware={[offset(-10)]}
							>
								<div className='box'>Five</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='left'"}</code>
						<code>{'open'}</code>
						<code>{'portal={false}'}</code>
						<code>{'middleware={[offset(-10)]}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={() => <OutlineBeacon />}
								open
								middleware={[
									autoPlacement({
										padding: 5,
										allowedPlacements: ['top', 'bottom'],
									}),
								]}
							>
								<div className='box'>Six</div>
							</Floating>
						</div>
						<code>{'floatingComponent={() => <OutlineBeacon />}'}</code>
						<code>{'open'}</code>
						<code>{`middleware={[
									autoPlacement({
										padding: 5,
										allowedPlacements: ['top', 'bottom']
									})
								]}`}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<OutlineBeacon />}
								placement='left'
								open={popperElemSevenIsVisible}
							>
								<div className='box'>Seven</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<OutlineBeacon />}'}</code>
						<code>{"placement='left'"}</code>
						<code>{'open={/* trigger with interval */}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<OutlineBeacon />}
								open={popperElemEightIsVisible}
								placement='top'
								portal={false}
								transitionProps={{
									duration: {
										close: 1000,
									},
									close: {
										transform: 'scale(0)',
										opacity: 0,
									},
								}}
							>
								<div className='box'>Eight</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<OutlineBeacon />}'}</code>
						<code>{"placement='top'"}</code>
						<code>{'open={/* trigger with interval */}'}</code>
						<code>{`transitionProps={{
									duration: {
										close: 1000,
									},
									close: {
										transform: 'scale(0)',
										opacity: 0,
									}
								}}`}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<FillBeacon />}
								placement='right-start'
								initialOpen={false}
							>
								<div className='box'>Nine</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='right-start'"}</code>
						<code>{'initialOpen={false}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<FillBeacon />}
								placement='right-end'
								initialOpen
							>
								<div className='box'>Ten</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='right-end'"}</code>
						<code>{'initialOpen'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<FillBeacon />}
								placement='top-end'
								hoverProps={{delay: 1000}}
							>
								<div className='box'>Eleven</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='top-end'"}</code>
						<code>{'hoverProps={{delay: 1000}}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={<FillBeacon />}
								placement='left'
								hoverProps={{enabled: false}}
							>
								<div className='box'>Twelve</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='top-end'"}</code>
						<code>{'hoverProps={{enabled: false}}'}</code>
					</div>
				</div>
			</div>
			<div className='card'>
				<span className='title'>Arrow</span>
				<div className='content mini-scrollable' id='arrow'>
					<div className='content-item'>
						<div className='component' style={{padding: '60px 0 0'}}>
							<Floating
								arrow={{
									enabled: true,
									width: 10,
									height: 4,
									fill: 'coral',
								}}
								floatingComponent={
									<Floating
										arrow={{
											enabled: true,
											width: 20,
											padding: 0,
											height: 7,
											fill: 'coral',
										}}
										floatingComponent={<div className='popover-box'>Three</div>}
										middleware={[offset(10)]}
										open
										placement='top'
									>
										<div className='popover-box'>Two</div>
									</Floating>
								}
								middleware={[offset(5)]}
								open
								placement='right'
							>
								<div className='box'>One</div>
							</Floating>
						</div>
						<code>
							{`arrow={{
									enabled: true,
									width: 10,
									height: 4,
									fill: 'coral',
								}}`}
						</code>
						<code>{`floatingComponent={
										<Floating
											arrow={{
												enabled: true,
												width: 20,
												padding: 0,
												height: 7,
												fill: 'coral',
											}}
											floatingComponent={<div className='popover-box'>Three</div>}
											middleware={[offset(10)]}
											open
											placement='top'
										>
											<div className='popover-box'>Two</div>
										</Floating>
									}`}</code>
						<code>{'middleware={[offset(5)]}'}</code>
						<code>{'open'}</code>
						<code>{"placement='right'"}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								arrow={{
									enabled: true,
									width: 10,
									padding: 0,
									height: 5,
									fill: 'coral',
									middlewareDataArrowStyles: (middlewareData) => ({
										transition: 'transform 0.2s',
										transform:
											middlewareData?.arrow?.centerOffset !== 0
												? 'translateY(-5px)'
												: undefined,
									}),
								}}
								floatingComponent={
									<div className='popover-box'>
										Five Five Five Five Five Five Five
									</div>
								}
								middleware={[
									offset(7),
									shift({
										boundary: document.querySelector('#arrow')!,
										limiter: limitShift({offset: 20}),
									}),
								]}
								open
								placement='right'
							>
								<Floating
									arrow={{
										enabled: true,
										width: 10,
										padding: 0,
										height: 5,
										fill: 'coral',
										middlewareDataArrowStyles: (middlewareData) => ({
											transition: 'transform 0.2s',
											transform:
												middlewareData?.arrow?.centerOffset !== 0
													? 'translateY(-5px)'
													: undefined,
										}),
									}}
									floatingComponent={
										<div className='popover-box'>
											Five Five Five Five Five Five Five
										</div>
									}
									middleware={[
										offset(7),
										shift({
											boundary: document.querySelector('#arrow')!,
											limiter: limitShift({offset: 20}),
										}),
									]}
									open
									placement='left'
								>
									<div className='box'>Four</div>
								</Floating>
							</Floating>
						</div>
						<code>
							{`arrow={{
											enabled: true,
											width: 10,
											padding: 0,
											height: 5,
											fill: 'coral',
											middlewareDataArrowStyles: (middlewareData) => ({
											transition: 'transform 0.2s',
											transform:
												middlewareData?.arrow?.centerOffset !== 0
													? 'translateY(-5px)'
													: undefined,
										})
                }}`}
						</code>
						<code>
							{
								"floatingComponent={<div className='popover-box'>Five Five Five Five Five Five Five</div>}"
							}
						</code>
						<code>
							{`middleware={[
										offset(7),
										shift({
											boundary: document.querySelector('#arrow')!,
											limiter: limitShift({offset: 20}),
										}),
									]}`}
						</code>
						<code>{'open'}</code>
						<code>{"placement='right'"}</code>
						<code>{`children={<Floating
									arrow={{
											enabled: true,
											width: 10,
											padding: 0,
											height: 5,
											fill: 'coral',
											middlewareDataArrowStyles: (middlewareData) => ({
											transition: 'transform 0.2s',
											transform:
												middlewareData?.arrow?.centerOffset !== 0
													? 'translateY(-5px)'
													: undefined,
										})
  }}
									floatingComponent={<div className='popover-box'>Five Five Five Five Five Five Five</div>}
									middleware={[
										offset(7),
										shift({
											boundary: document.querySelector('#arrow')!,
											limiter: limitShift({offset: 20}),
										}),
									]}
									open
									placement='left'
								>
									<div className='box'>Four</div>
								</Floating>}`}</code>
					</div>
					<div className='content-item'>
						<div className='component' style={{padding: '60px 0'}}>
							<Floating
								arrow={{
									enabled: true,
									width: 10,
									padding: 0,
									height: 5,
									fill: 'coral',
								}}
								floatingComponent={<div className='popover-box'>Seven</div>}
								middleware={[
									flip({
										boundary: document.querySelector('#arrow')!,
									}),
									offset(10),
								]}
								open
								placement='top'
							>
								<div className='box'>Six</div>
							</Floating>
						</div>
						<code>
							{`arrow={{
									enabled: true,
									width: 10,
									padding: 0,
									height: 5,
									fill: 'coral',
								}}`}
						</code>
						<code>
							{"floatingComponent={<div className='popover-box'>Seven</div>}"}
						</code>
						<code>
							{`middleware={[
									flip({
										boundary: document.querySelector('#arrow')!,
									}),
									offset(10),
								]}`}
						</code>
						<code>{'open'}</code>
						<code>{"placement='top'"}</code>
					</div>
				</div>
			</div>
			<div className='card'>
				<span className='title'>Popover</span>
				<div className='content'>
					<div className='content-item'>
						<Popover
							text={`took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
						/>
						<code>{`text={...}`}</code>
					</div>
					<div className='content-item'>
						<Popover
							className='test-class'
							text={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
						/>
						<code>{`text={...}`}</code>
						<code>{`className='test-class'`}</code>
					</div>
					<div className='content-item'>
						<Popover text={`Lorem Ipsum`} style={{background: 'coral'}} />
						<code>{`text={...}`}</code>
						<code>{`style={{background: 'coral'}}`}</code>
					</div>
				</div>
			</div>
			<div className='card'>
				<span className='title'>Hint</span>
				<div className='content mini-scrollable'>
					<div className='content-item'>
						<Hint hit={2} popover='Two' beaconProps={{placement: 'right'}}>
							<div className='box'>One</div>
						</Hint>
						<code>{`hit={2}`}</code>
						<code>{`popover='Two'`}</code>
						<code>{`beaconProps={{placement: 'right'}}`}</code>
					</div>
					<div className='content-item'>
						<Hint
							hit='always'
							popover='Five'
							beacon={<div className='popover-box'>Four</div>}
							beaconProps={{placement: 'bottom-end'}}
						>
							<div className='box'>Three</div>
						</Hint>
						<code>{`hit='always'`}</code>
						<code>{`popover='Five'`}</code>
						<code>{`beaconProps={{placement: 'bottom-end'}}`}</code>
						<code>{`beacon={<div className='popover-box'>Four</div>}`}</code>
					</div>
					<div className='content-item'>
						<Hint
							hit='always'
							popover={
								<Popover text='Eight' style={{backgroundColor: 'coral'}} />
							}
							popoverProps={{arrow: {enabled: false}}}
							beacon={<div className='popover-box'>Seven</div>}
							beaconProps={{placement: 'bottom-end'}}
						>
							<div className='box'>Six</div>
						</Hint>
						<code>{`hit='always'`}</code>
						<code>{`popover={<Popover text='Eight' style={{backgroundColor: 'coral'}} />}`}</code>
						<code>{`popoverProps={{arrow: {enabled: false}}}`}</code>
						<code>{`beacon={<div className='popover-box'>Seven</div>}`}</code>
						<code>{`beaconProps={{placement: 'bottom-end'}}`}</code>
					</div>
					<div className='content-item'>
						<Hint
							hit='always'
							popover='Ten'
							autoStart={false}
							ref={nineRef}
							popoverProps={{
								hoverProps: {enabled: true},
							}}
						>
							<div className='box'>Nine</div>
						</Hint>
						<code>{`hit='always'`}</code>
						<code>{`popover='Ten'`}</code>
						<code>{`autoStart={false}`}</code>
						<code>{`ref={nineRef}`}</code>
						<code>{`popoverProps={{
								hoverProps: {enabled: true},
							}}`}</code>
						<code>{`setTimeout(() => {
			nineRef.current?.start();
		}, 10000);`}</code>
					</div>
					<div className='content-item'>
						<Hint
							hit='always'
							popover='Thirteen'
							beacon={<div className='popover-box'>Twelve</div>}
							beaconProps={{placement: 'top-end', autoOffset: false}}
							popoverProps={{
								placement: 'top',
								transitionProps: {
									duration: {
										close: 1000,
									},
									close: {
										transform: 'scale(0)',
										opacity: 0,
									},
								},
								middleware: [
									offset(10),
									autoPlacement({
										allowedPlacements: ['top', 'bottom'],
									}),
								],
							}}
						>
							<div className='box'>Eleven</div>
						</Hint>
						<code>{`hit='always'`}</code>
						<code>{`popover='Thirteen'`}</code>
						<code>{`beaconProps={{placement: 'top-end', autoOffset: false}}`}</code>
						<code>{`beacon={<div className='popover-box'>Twelve</div>}`}</code>
						<code>{`popoverProps={{
								placement: 'top',
								transitionProps: {
									duration: {
										close: 1000,
									},
									close: {
										transform: 'scale(0)',
										opacity: 0,
									},
								},
								middleware: [
									offset(10),
									autoPlacement({
										allowedPlacements: ['top', 'bottom'],
									}),
								],
							}}`}</code>
					</div>
					<div className='content-item'>
						<Hint
							hit='always'
							popover='Sixteen'
							beacon={<div className='popover-box'>Fifteen</div>}
							beaconProps={{placement: 'top', autoOffset: false}}
							popoverProps={{
								placement: 'top',
								open: true,
							}}
						>
							<div className='box'>Fourteen</div>
						</Hint>
						<code>{`hit='always'`}</code>
						<code>{`popover='Sixteen'`}</code>
						<code>{`beaconProps={{placement: 'top', autoOffset: false}}`}</code>
						<code>{`beacon={<div className='popover-box'>Fifteen</div>}`}</code>
						<code>{`popoverProps={{
								placement: 'top',
								open: true,
							}}`}</code>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
