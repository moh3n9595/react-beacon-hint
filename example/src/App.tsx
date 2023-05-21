import {FillBeacon, Floating, Hint, Popover} from 'react-beacon-hint';
import 'react-beacon-hint/lib/styles.min.css';
import {Beacon} from './assets/svgs';
import {Wave} from './assets/svgs';
import styles from './App.module.scss';
import {motion} from 'framer-motion';
import {Box, Clouds, Highlight, Result, Step} from './components';
import {ArrowCode, FloatingCode, PopoverCode, quickStartCode} from './snippets';
import {limitShift, offset, shift} from '@floating-ui/react';

const App = () => {
	return (
		<>
			<Clouds />
			<div className={`w-full flex items-center flex-col overflow-scroll relative `}>
				<div className={`${styles.app} w-screen 2xl:w-3/4 flex items-center justify-center flex-col min-h-full`}>
					<motion.div
						className=''
						initial={{y: 100}}
						animate={{y: -70}}
						transition={{
							duration: 1,
							delay: 1,
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
							delay: 1.6,
						}}
						className='w-full 2xl:w-4/5 flex flex-col-reverse items-center lg:flex-row justify-around xl:justify-evenly'
					>
						<Result>
							<Hint popover='Yay! I Appeared!'>
								<Box text='Click The Hint' />
							</Hint>
						</Result>
						<Highlight code={quickStartCode} />
					</motion.div>
				</div>
				<div className='w-full flex items-center flex-col justify-start mt-40 lg:mt-10 pb-96 '>
					<h1 className='text-4xl md:text-5xl text-zinc-100 drop-shadow-xl mb-8'>Examples</h1>
					<Step text='Hint'>
						<Result>
							<Hint popover='Yay! I Appeared!'>
								<Box text='Click The Hint' />
							</Hint>
						</Result>
						<Highlight code={quickStartCode} />
					</Step>
					<Step text='Floating'>
						<Result>
							<Floating
								floatingComponent={<FillBeacon />}
								open
								placement='left'
								disablePortal
								middleware={[offset(-10)]}
							>
								<Box text='Submit' />
							</Floating>
						</Result>
						<Highlight code={FloatingCode} />
					</Step>
					<Step text='Arrow'>
						<Result>
							<Floating
								arrow={{enabled: true, size: 10, style: {backgroundColor: 'coral'}}}
								floatingComponent={
									<div className='flex items-center justify-center w-max-[50px] min-h-[50px] text-center bg-[#ff7f50] px-2'>
										I&apos;m Arrow!
									</div>
								}
								middleware={[shift({limiter: limitShift()}), offset(10)]}
								open
								placement='left'
							>
								<Box text='Submit' />
							</Floating>
						</Result>
						<Highlight code={ArrowCode} />
					</Step>
					<Step text='Popover'>
						<Result>
							<div className='flex flex-col items-center justify-center'>
								<Popover text={`User Onboarding Component for React with Fully Configurable Options!`} />
								<Box text='Submit' />
							</div>
						</Result>
						<Highlight code={PopoverCode} />
					</Step>
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
