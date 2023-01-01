import {useRef} from 'react';
import {FillBeacon, OutlineBeacon, Portal} from 'react-beacon-hint';
import './App.scss';

function App() {
	const portalTitleRef = useRef<HTMLSpanElement>(null);
	const portalCardRef = useRef<HTMLDivElement>(null);

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
				</div>
			</div>
			<div className='card' ref={portalCardRef}>
				<span className='title' ref={portalTitleRef}>
					Portal
				</span>
				<div className='content'>
					<div className='content-item'>
						<div className='component'>
							<Portal container={() => portalTitleRef.current}>
								<FillBeacon />
							</Portal>
						</div>
						<code>{'container={portalTitleRef}'}</code>
						<code>{'children={<FillBeacon />}'}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Portal container={() => portalCardRef.current}>
								<OutlineBeacon color='green' />
							</Portal>
						</div>
						<code>{'container={portalCardRef}'}</code>
						<code>{"children={<OutlineBeacon color='green' />}"}</code>
					</div>
					<div className='content-item'>
						<div className='component'>
							<Portal disabled>
								<FillBeacon />
							</Portal>
						</div>
						<code>disabled</code>
						<code>{'children={<FillBeacon />}'}</code>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
