import {Hint, Popover} from 'react-beacon-hint';
import 'react-beacon-hint/lib/style.css';
import {Beacon} from './assets/svgs';
import {Wave} from './assets/svgs';
import styles from './App.module.scss';
import {motion} from 'framer-motion';
import {Box, Highlight, Result} from './components';
import {quickStartCode} from './snippets';
const App = () => {
	return (
		<>
			{/* <CloudGenerator /> */}
			<div className={`${styles.app} w-full md:w-3/4 flex items-center flex-col h-5/6 relative`}>
				<motion.div
					className='absolute top-2/4'
					initial={{y: 0}}
					animate={{y: -250}}
					transition={{
						duration: 1.5,
						delay: 1.8,
					}}
				>
					<motion.h1
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{
							duration: 0.8,
							delay: 0.5,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className='text-5xl md:text-7xl text-zinc-100 mb-5 '
					>
						React Beacon Hint
					</motion.h1>
					<motion.p
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{
							duration: 0.8,
							delay: 0.8,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className='text-2xl xl:mb-10'
					>
						User Onboarding Component for React with Fully Configurable Options!
					</motion.p>
				</motion.div>
				<motion.div
					initial={{display: 'none', opacity: 0}}
					animate={{display: 'flex', opacity: 1}}
					transition={{
						duration: 0.6,
						delay: 2.6,
					}}
					className='w-full flex flex-col-reverse xl:flex-row justify-evenly absolute top-2/4'
				>
					<Result>
						<Hint popover='Yay! I Appeared!'>
							<Box text='Click The Hint' />
						</Hint>
					</Result>
					<Highlight code={quickStartCode} />
				</motion.div>
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
