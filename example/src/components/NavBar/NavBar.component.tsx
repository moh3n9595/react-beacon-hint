import {memo} from 'react';
import {Link} from 'react-router-dom';
import {Github} from '../../assets/svgs';
import './NavBar.scss';

const NavBar = () => {
	return (
		<div className='menu'>
			<ul>
				<li>
					<Link to='/' className='menu-item'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/docs' className='menu-item'>
						Docs
					</Link>
				</li>
				<li>
					<Link to='/examples' className='menu-item'>
						Examples
					</Link>
				</li>
			</ul>
			<div className='logo-container'>
				<Github size={27} fill='#fff' />
				{/* <NPM size={45} /> */}
			</div>
		</div>
	);
};

const MemoizedNavBar = memo(NavBar);
export {MemoizedNavBar as NavBar};
