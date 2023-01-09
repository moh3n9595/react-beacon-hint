import {memo} from 'react';
import {SideBar} from '../Components';
import {Outlet} from 'react-router-dom';
import './root.scss';
const Root = () => {
	return (
		<div className='root-layout'>
			<SideBar />
			<div className='main-layout'>
				<Outlet />
			</div>
		</div>
	);
};

const MemoizedRoot = memo(Root);
export {MemoizedRoot as Root};
