import {Hint, Popover} from 'react-beacon-hint';
import 'react-beacon-hint/lib/style.css';
import {Beacon} from './assets/svgs';
import {Wave} from './assets/svgs';
import styles from './App.module.scss';
import {motion} from 'framer-motion';
import {Box, Highlight, Result} from './components';
import {quickStartCode} from './snippets';
import {CloudGenerator} from './components/Clouds/GenerateClouds';

const App = () => {
	return (
		<>
			<CloudGenerator />
			<div className={`w-full flex items-center flex-col overflow-scroll relative `}>
				<div className={`${styles.app} w-full md:w-3/4 flex items-center flex-col relative min-h-full`}>
					<motion.div
						className='absolute top-2/4'
						initial={{y: 0}}
						animate={{y: -230}}
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
							className='text-5xl md:text-7xl text-zinc-100 mb-5 drop-shadow-xl'
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
							className='text-2xl xl:mb-10 drop-shadow-xl'
						>
							User Onboarding Component for React with Fully Configurable Options!
						</motion.p>
					</motion.div>
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{
							duration: 0.6,
							delay: 2.6,
						}}
						className='w-4/5 flex flex-col-reverse xl:flex-row justify-evenly absolute top-2/4'
					>
						<Result>
							<Hint popover='Yay! I Appeared!'>
								<Box text='Click The Hint' />
							</Hint>
						</Result>
						<Highlight code={quickStartCode} />
					</motion.div>
				</div>
				<div className='w-full flex items-center flex-col justify-center h-screen mt-10 pb-60'>
					<h1 className='text-4xl md:text-4xl text-zinc-100 drop-shadow-xl mb-8'>...Examples...</h1>
					<div className='w-3/5 flex flex-row justify-evenly mb-10'>
						<Result>
							<Hint popover='Yay! I Appeared!'>
								<Box text='Click The Hint' />
							</Hint>
						</Result>
						<Highlight code={quickStartCode} />
					</div>
					<div className='w-3/5 flex flex-row justify-evenly mb-10'>
						<Result>
							<Hint popover='Yay! I Appeared!'>
								<Box text='Click The Hint' />
							</Hint>
						</Result>
						<Highlight code={quickStartCode} />
					</div>
				</div>
			</div>
			<div className='fixed bottom-0 w-screen'>
				<div className='w-full relative flex flex-row '>
					<motion.div
						initial={{y: 0, x: 0}}
						animate={{y: [-10, 0, 10, 0], x: [10, -10]}}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						}}
						className='absolute right-5 bottom-0 -z-10 w-1/6'
					>
						<Hint
							popover={<Popover text='npm i react-beacon-hint' className={styles.code} />}
							popoverProps={{placement: 'top', open: true}}
							beaconProps={{placement: 'top'}}
							beacon='fill'
						>
							<Beacon fill='#021F2B' />
						</Hint>
					</motion.div>
					<Wave />
				</div>
			</div>
		</>
	);
};

export default App;
