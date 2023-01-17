import {Hint, Popover} from 'react-beacon-hint';
import 'react-beacon-hint/lib/style.css';
import {Box, Highlight, Result} from './components';
import {quickStartCode} from './snippets';
import {Beacon} from './assets/svgs';
import {Wave} from './assets/svgs/Wave';
import styles from './App.module.scss';

const App = () => {
	return (
		<>
			<div className={`${styles.app} w-full md:w-3/4 h-full flex flex-col items-center justify-center`}>
				<h1 className='text-5xl md:text-7xl text-zinc-100 mb-5 '>React Beacon Hint</h1>
				<p className='text-2xl xl:mb-10'>User Onboarding Component for React with Fully Configurable Options!</p>
				<div className='w-full flex flex-col-reverse xl:flex-row justify-evenly items-center mt-10'>
					<Result>
						<Hint popover='Yay! I Appeared!'>
							<Box text='Click The Hint' />
						</Hint>
					</Result>
					<Highlight code={quickStartCode} />
				</div>
			</div>
			<div className='fixed bottom-0 w-screen'>
				<div className='w-full relative'>
					<div className='absolute right-5 bottom-0 -z-10 w-1/6'>
						<Hint
							popover={<Popover text='npm i react-beacon-hint' className={styles.code} />}
							popoverProps={{placement: 'top', open: true}}
							beaconProps={{placement: 'top'}}
							beacon='fill'
						>
							<Beacon fill='#fff' />
						</Hint>
					</div>
					<Wave />
				</div>
			</div>
		</>
	);
};

export default App;
