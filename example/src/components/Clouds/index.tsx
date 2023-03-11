import {motion} from 'framer-motion';
import {memo, useCallback, useEffect, useState} from 'react';
import {Cloud} from '../../assets/svgs';

type ICloud = {
	id: number;
	top: number;
	left: number;
	direction: string;
	finished: boolean;
	duration: number;
	size: 'small' | 'medium' | 'large';
};

const MAX_MOVE_THRESHOLD = window.innerWidth;

const Clouds = () => {
	const [clouds, setClouds] = useState<ICloud[]>([]);

	const generateClouds = useCallback(
		(newClouds = clouds) => {
			if (newClouds.length >= 4) return;
			const RANDOM_NUM = Math.floor(1 + Math.random() * 3);
			const cloudLeftPosition = Math.floor(1 + Math.random() * MAX_MOVE_THRESHOLD);
			setClouds([
				...newClouds,
				{
					id: Math.random() * 180,
					top: Math.floor(1 + Math.random() * 180),
					left: cloudLeftPosition,
					direction: cloudLeftPosition < MAX_MOVE_THRESHOLD / 2 ? 'right' : 'left',
					finished: false,
					duration: Math.floor(40 + Math.random() * 20),
					size: RANDOM_NUM === 1 ? 'small' : RANDOM_NUM === 2 ? 'medium' : 'large',
				},
			]);
		},
		[clouds],
	);

	useEffect(() => {
		const interval = setInterval(() => {
			generateClouds();
		}, 500);

		return () => clearInterval(interval);
	}, [clouds, generateClouds]);

	const removeCloud = useCallback(
		(id: number) => {
			const newArr = clouds.filter((cl) => cl.id !== id);
			generateClouds(newArr);
		},
		[clouds, generateClouds],
	);

	const cloudSize = useCallback((cl: string) => {
		switch (cl) {
			case 'small':
				return 'w-24 h-24';
			case 'medium':
				return 'w-32 h-32';
			case 'large':
				return 'w-40 h-40';

			default:
				break;
		}
	}, []);

	return (
		<div className='clouds absolute -z-10 w-full h-60 flex justify-between overflow-x-hidden'>
			{clouds.map((cloud) => {
				return (
					<motion.div
						key={cloud.id}
						initial={{opacity: 0}}
						animate={{
							x: cloud.direction === 'left' ? cloud.left - MAX_MOVE_THRESHOLD : -(cloud.left - MAX_MOVE_THRESHOLD),
							opacity: [0, 0.8, 0],
						}}
						transition={{
							duration: cloud.duration,
							times: [0, 0.5, 1],
							loop: Infinity,
							ease: 'easeInOut',
						}}
						onAnimationComplete={() => removeCloud(cloud.id)}
						className={`${cloudSize(cloud.size)} fixed z-10`}
						style={{left: cloud.left, top: cloud.top}}
					>
						<Cloud />
					</motion.div>
				);
			})}
		</div>
	);
};

const MemoizedClouds = memo(Clouds);
export {MemoizedClouds as Clouds};
