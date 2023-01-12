import {memo} from 'react';
import {NavBar} from '../components';
import {Outlet} from 'react-router-dom';
import './root.scss';
const Root = () => {
	return (
		<>
			<NavBar />
			<div className='main-layout'>
				<Outlet />
			</div>
		</>
	);
};

const MemoizedRoot = memo(Root);
export {MemoizedRoot as Root};
