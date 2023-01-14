import {memo} from 'react';
import './Home.scss';
import {Hint, OutlineBeacon} from '../../../../index';
import {CodeSnippet} from '../../components';
import {Beacon} from '../../assets/svgs';
import {quickStartSnippet} from '../../codeSnippets';
const Home = () => {
	return (
		<>
			<div className='home-page-container'>
				<>
					<OutlineBeacon size={40} className='beacon' />
					<div className='logo-container'>
						<Beacon size={200} fill='#c7d4f2' />
					</div>
				</>
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
			</div>
			{/* <div className='container w-screen h-0.'> */}
			{/* <div className='footer-inner-container'>
					<div>
						<code>&#62; npm i -S react-beacon-hint</code>
					</div>
					<div>
						<code>&#62; yarn add -S react-beacon-hint</code>
					</div>
				</div> */}
			{/* <Wave /> */}
			{/* </div> */}
		</>
	);
};

const MemoizedHome = memo(Home);
export {MemoizedHome as Home};
