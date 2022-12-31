import {FillBeacon, OutlineBeacon} from 'react-beacon-hint';
import './App.scss';

function App() {
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
		</div>
	);
}

export default App;
