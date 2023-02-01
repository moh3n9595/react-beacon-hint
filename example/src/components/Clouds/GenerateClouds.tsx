import {motion, ResolvedValues} from 'framer-motion';
import {memo, useEffect, useState} from 'react';
import {Cloud} from '../../assets/svgs';

type ICloud = {
	id: number;
	top: number;
	left: string;
	direction: string;
};

const CloudGenerator = () => {
	const [clouds, setClouds] = useState<ICloud[]>([]);
	// const MAX_MOVE_THRESHOLD = window.innerWidth;

	useEffect(() => {
		const interval = setInterval(() => {
			if (clouds.length >= 5) return;

			setClouds([
				...clouds,
				{
					id: clouds.length + 1,
					top: Math.floor(1 + Math.random() * 180),
					left: Math.floor(1 + Math.random() * 100) + '%',
					direction: Math.random() >= 0.5 ? 'right' : 'left',
				},
			]);
		}, 1000);

		return () => clearInterval(interval);
	}, [clouds]);

	const onUpdate = (latest: ResolvedValues, cloud: ICloud) => {
		if (latest.x >= 450 || latest.x <= -450) {
			setClouds((prev) => prev.filter((c) => c.id !== cloud.id));
		}
	};

	return (
		<div className='clouds absolute w-full h-60 flex justify-between'>
			{clouds.map((cloud) => {
				return (
					<motion.div
						key={cloud.id}
						animate={{x: cloud.direction === 'right' ? 500 : -500}}
						transition={{
							duration: 15,
							// delay: 1.8,
						}}
						onUpdate={(latest) => onUpdate(latest, cloud)}
						className={`w-24 h-24 absolute z-10`}
						style={{left: cloud.left, top: cloud.top}}
					>
						<Cloud />
					</motion.div>
				);
			})}
		</div>
	);
};

const MemoizedCloudGenerator = memo(CloudGenerator);
export {MemoizedCloudGenerator as CloudGenerator};

// style={{top: Math.floor(5 + Math.random() * 180), left: Math.floor(20 + Math.random() * window.innerWidth)}}
