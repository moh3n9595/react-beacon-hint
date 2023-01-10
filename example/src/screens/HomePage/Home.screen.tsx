import {memo} from 'react';
import './Home.scss';
import {Hint, OutlineBeacon} from '../../../../index';
const Home = () => {
	return (
		<>
			<OutlineBeacon size={180} color='#c7d4f2' />
			<h1>Welcome To React Beacon Hint</h1>
			<p>here is a very basic example just click on it and see what happens! </p>
			<div className='result-container'>
				<Hint popover='Hello from hint!' beaconProps={{placement: 'right'}}>
					<button>This needs a hint</button>
				</Hint>
			</div>
		</>
	);
};

const MemoizedHome = memo(Home);
export {MemoizedHome as Home};
