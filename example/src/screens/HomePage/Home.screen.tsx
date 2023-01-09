import {memo} from 'react';
// import './MainLayout.scss';
import {OutlineBeacon} from '../../../../index';
const Home = () => {
	return (
		<>
			<OutlineBeacon size={160} />
			<h1>Welcome To React Beacon Hint</h1>
		</>
	);
};

const MemoizedHome = memo(Home);
export {MemoizedHome as Home};
