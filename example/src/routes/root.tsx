import {memo} from 'react';
import {NavBar} from '../components';
import {Outlet} from 'react-router-dom';
import './root.scss';
const Root = () => {
	return (
		<>
			<NavBar />
			<div className='container md flex flex-col items-center justify-center h-[calc(100%_-_13rem)]'>
				<Outlet />
			</div>
		</>
	);
};

const MemoizedRoot = memo(Root);
export {MemoizedRoot as Root};
