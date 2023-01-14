import {memo} from 'react';
import './Home.scss';
import {Hint} from '../../../../index';
import {CodeSnippet} from '../../components';
import {quickStartSnippet} from '../../codeSnippets';
import {Wave} from './wave';
const Home = () => {
	return (
		<>
			<div className='w-3/4 flex flex-col items-center justify-center'>
				{/* <>
					<OutlineBeacon size={40} className='beacon' />
					<div className='flex justify-center'>
						<Beacon size={200} fill='#c7d4f2' />
					</div>
				</> */}
				<h1 className='text-6xl'>React Beacon Hint</h1>
				<p>User Onboarding Component for React with Fully Configurable Options!</p>
				<div className='w-full flex flex-row justify-around mt-10'>
					<div className='result-container'>
						<Hint popover='Yay! I Appeared!'>
							<button className='sample-button'>Click The Hint</button>
						</Hint>
					</div>
					<CodeSnippet language='javascript' code={quickStartSnippet} />
				</div>
			</div>
			<div className='fixed inset-x-0 bottom-0 h-52'>
				{/* <div className='footer-inner-container'>
					<div>
						<code>&#62; npm i -S react-beacon-hint</code>
					</div>
					<div>
						<code>&#62; yarn add -S react-beacon-hint</code>
					</div>
				</div> */}
				<Wave />
			</div>
		</>
	);
};

const MemoizedHome = memo(Home);
export {MemoizedHome as Home};
