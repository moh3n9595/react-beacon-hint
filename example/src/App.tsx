import {offset} from '@floating-ui/react';
import {useEffect, useState} from 'react';
import {FillBeacon, Floating, OutlineBeacon} from 'react-beacon-hint';
import './App.scss';

function App() {
	const [popperElemSevenIsVisible, setPopperElemSevenIsVisible] = useState(false);
	const [popperElemEightIsVisible, setPopperElemEightIsVisible] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setPopperElemSevenIsVisible((prev) => !prev);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setPopperElemEightIsVisible((prev) => !prev);
		}, 1000);

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
				<div className='content'>
					<div className='content-item'>
						<div className='component'>
							<Floating floatingComponent={<OutlineBeacon />} open placement='right'>
								<div className='box'>One</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<OutlineBeacon />}'}</code>
						<code>{"placement='right'"}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating floatingComponent={<OutlineBeacon />} open placement='left-start'>
								<div className='box'>Two</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<OutlineBeacon />}'}</code>
						<code>{"placement='left-start'"}</code>
						<code>{'open'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating floatingComponent={<FillBeacon />} open placement='right-end'>
								<div className='box'>Three</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<OutlineBeacon />}'}</code>
						<code>{"placement='right-end'"}</code>
						<code>{'open'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating floatingComponent={<OutlineBeacon />} open={false} placement='left'>
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
								open
								placement='left'
								disablePortal
								middleware={[offset(-10)]}
							>
								<div className='box'>Five</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='left'"}</code>
						<code>{'open'}</code>
						<code>{'disablePortal'}</code>
						<code>{'middleware={[offset(-10)]}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating
								floatingComponent={() => <OutlineBeacon />}
								open
								placement='top'
								animatePresenceProps={{initial: true}}
							>
								<div className='box'>Six</div>
							</Floating>
						</div>
						<code>{'floatingComponent={() => <OutlineBeacon />}'}</code>
						<code>{"placement='top'"}</code>
						<code>{'open'}</code>
						<code>{`animatePresenceProps={{initial: true}}`}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating floatingComponent={<OutlineBeacon />} open={popperElemSevenIsVisible} placement='left'>
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
								animateProps={{
									initial: {scale: 0},
									animate: {scale: 1},
									exit: {scale: 0},
								}}
							>
								<div className='box'>Eight</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<OutlineBeacon />}'}</code>
						<code>{"placement='top'"}</code>
						<code>{'open={/* trigger with interval */}'}</code>
						<code>{`animateProps={{
									initial: {scale: 0},
									animate: {scale: 1},
									exit: {scale: 0},
								}}`}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating floatingComponent={<FillBeacon />} initialOpen={false} placement='right-start'>
								<div className='box'>Nine</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='right-start'"}</code>
						<code>{'initialOpen={false}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating floatingComponent={<FillBeacon />} initialOpen placement='right-end'>
								<div className='box'>Ten</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='right-end'"}</code>
						<code>{'initialOpen'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating floatingComponent={<FillBeacon />} placement='top-end' hoverProps={{delay: 1000}}>
								<div className='box'>Eleven</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='top-end'"}</code>
						<code>{'hoverProps={{delay: 1000}}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Floating floatingComponent={<FillBeacon />} placement='left' hoverProps={{enabled: false}}>
								<div className='box'>Twelve</div>
							</Floating>
						</div>
						<code>{'floatingComponent={<FillBeacon />}'}</code>
						<code>{"placement='top-end'"}</code>
						<code>{'hoverProps={{enabled: false}}'}</code>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
