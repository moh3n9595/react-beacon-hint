import {memo} from 'react';
import './Home.scss';
import {Hint} from '../../../../index';
import {CodeSnippet} from '../../components';
import {quickStartSnippet} from '../../codeSnippets';
import {Wave} from './wave';
import {Beacon} from '../../assets/svgs';
import {FillBeacon} from 'react-beacon-hint';
const Home = () => {
	return (
		<>
			<div className='w-3/4 flex flex-col items-center justify-center'>
				<h1 className='text-5xl md:text-7xl text-zinc-100 mb-5 '>React Beacon Hint</h1>
				<p className='text-2xl mb-10'>User Onboarding Component for React with Fully Configurable Options!</p>
				<div className='w-full flex flex-col-reverse xl:flex-row justify-around items-center mt-10'>
					<div className='result-container mt-5 xl:mt-0'>
						<Hint popover='Yay! I Appeared!'>
							<button className='sample-button'>Click The Hint</button>
						</Hint>
					</div>
					<CodeSnippet language='javascript' code={quickStartSnippet} />
				</div>
			</div>
			<div className='fixed bottom-0 w-screen'>
				<div className='w-full relative'>
					{/* <div className='footer-inner-container'>
					<div>
						<code>&#62; npm i -S react-beacon-hint</code>
					</div>
					<div>
						<code>&#62; yarn add -S react-beacon-hint</code>
					</div>
				</div> */}
					<div className='absolute right-5 bottom-0 -z-10 w-1/6'>
						<FillBeacon size={25} color='#FF5700' className='relative top-2' />
						<Beacon fill='#fff' />
					</div>
					<Wave />
				</div>
			</div>
		</>
	);
};

const MemoizedHome = memo(Home);
export {MemoizedHome as Home};
