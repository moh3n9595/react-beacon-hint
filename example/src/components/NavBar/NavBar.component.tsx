import {memo} from 'react';
import {Link} from 'react-router-dom';
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
		</div>
	);
};

const MemoizedNavBar = memo(NavBar);
export {MemoizedNavBar as NavBar};
