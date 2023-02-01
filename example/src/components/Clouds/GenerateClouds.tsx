import {memo, useMemo} from 'react';
import {Cloud} from '../../assets/svgs';

const CloudGenerator = () => {
	const renderClouds = useMemo(() => {
		const cloudsArr = [];
		for (let i = 1; i <= 4; i++) {
			cloudsArr.push(
				<div className='w-16 h-10 '>
					<Cloud size={Math.floor(1 + Math.random()) * 100} />
				</div>,
			);
		}
		console.log(cloudsArr);
		return cloudsArr;
	}, []);

	return <div className='clouds w-full h-60 flex justify-center items-center bg-red-800'>{renderClouds}</div>;
};

const MemoizedCloudGenerator = memo(CloudGenerator);
export {MemoizedCloudGenerator as CloudGenerator};
