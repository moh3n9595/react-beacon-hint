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
					<Link to='/Advanced' className='menu-item'>
						item 1
					</Link>
				</li>
				<li>
					<Link to='/Advanced' className='menu-item'>
						item 2
					</Link>
				</li>
				<li>
					<Link to='/Advanced' className='menu-item'>
						item 3
					</Link>
				</li>
			</ul>
		</div>
	);
};

const MemoizedNavBar = memo(NavBar);
export {MemoizedNavBar as NavBar};
