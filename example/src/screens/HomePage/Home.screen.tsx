import {memo} from 'react';
import './Home.scss';
import {Hint, OutlineBeacon} from '../../../../index';
import {CodeSnippet} from '../../components';
import {Beacon} from '../../assets/svgs';
import {quickStartSnippet} from '../../codeSnippets';
const Home = () => {
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
					<Hint popover='Yay! I Appeared!'>
						<button className='sample-button'>Click The Hint</button>
					</Hint>
				</div>
				<CodeSnippet language='javascript' code={quickStartSnippet} />
			</div>
		</>
	);
};

const MemoizedHome = memo(Home);
export {MemoizedHome as Home};
