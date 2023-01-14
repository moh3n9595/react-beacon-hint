import {memo} from 'react';
import {Link} from 'react-router-dom';
import {Github} from '../../assets/svgs';
import './NavBar.scss';

const NavBar = () => {
	return (
		<div className='w-full bg-slate-900 flex flex-row justify-between rounded-b-full py-4 px-10'>
			<ul className='flex flex-row'>
				<li>
					<Link to='/' className='p-2 mr-8 text-xl text-slate-300'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/docs' className='p-2 mr-8 text-xl text-slate-300'>
						Docs
					</Link>
				</li>
				<li>
					<Link to='/examples' className='p-2 mr-8 text-xl text-slate-300'>
						Examples
					</Link>
				</li>
			</ul>
			<div className='flex flex-row align-middle'>
				<Github size={27} fill='#fff' />
				{/* <NPM size={45} /> */}
			</div>
		</div>
	);
};

const MemoizedNavBar = memo(NavBar);
export {MemoizedNavBar as NavBar};
