import {memo} from 'react';
import './Home.scss';
import {Hint, OutlineBeacon} from '../../../../index';
import {CodeSnippet} from '../../Components';
import {Beacon} from '../../assets/svgs';
const Home = () => {
	const code = `const App = props => {
		return (
			<div>
				<h1> React App </h1>
				<div>Awesome code</div>
			</div>
		);
	};`;
	return (
		<>
			<div>
				<OutlineBeacon size={50} className='beacon' />
				<div className='logo-container'>
					<Beacon size={250} fill='#c7d4f2' />
				</div>
			</div>
			<h1>React Beacon Hint</h1>
			<p>User Onboarding Component for React with Fully Configurable Options!</p>
			<div className='showcase-container'>
				<div className='result-container'>
					<Hint popover='Hello from hint!' beaconProps={{placement: 'right'}}>
						<button className='sample-button'>This needs a hint</button>
					</Hint>
				</div>
				<CodeSnippet language='javascript' code={code} />
			</div>
		</>
	);
};

const MemoizedHome = memo(Home);
export {MemoizedHome as Home};
