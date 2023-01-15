import {memo} from 'react';
import './Home.scss';
import {Hint} from '../../../../index';
import {CodeSnippet} from '../../components';
import {quickStartSnippet} from '../../codeSnippets';
import {Wave} from './Wave';
import {Beacon} from '../../assets/svgs';
const Home = () => {
	return (
		<>
			<div className='w-full md:w-3/4 h-full flex flex-col items-center justify-center'>
				<h1 className='text-5xl md:text-7xl text-zinc-100 mb-5 '>React Beacon Hint</h1>
				<p className='text-2xl xl:mb-10'>User Onboarding Component for React with Fully Configurable Options!</p>
				<div className='w-full flex flex-col-reverse xl:flex-row justify-evenly items-center mt-10'>
					<div className='result-container h-full rounded-lg p-4 mt-5 xl:mt-0 flex items-center justify-center'>
						<Hint popover='Yay! I Appeared!'>
							<button className='sample-button'>Click The Hint</button>
						</Hint>
					</div>
					<CodeSnippet language='javascript' code={quickStartSnippet} />
				</div>
			</div>
			<div className='fixed bottom-0 w-screen'>
				<div className='w-full relative'>
					<div className='absolute right-5 bottom-0 -z-10 w-1/6'>
						<Hint popover='npm i -S react-beacon-hint' beaconProps={{placement: 'top'}}>
							<Beacon fill='#fff' />
						</Hint>
					</div>
					{/* <div className='bottom-10 left-8 absolute flex flex-col text-start text-slate-100'>
						<div>
							<code>&#62; npm i -S react-beacon-hint</code>
						</div>
						<div className='mt-10'>
							<code>&#62; yarn add -S react-beacon-hint</code>
						</div>
					</div> */}
					<Wave />
				</div>
			</div>
		</>
	);
};

const MemoizedHome = memo(Home);
export {MemoizedHome as Home};
