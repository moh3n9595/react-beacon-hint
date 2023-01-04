import colorAlpha from 'color-alpha';
import {memo, useLayoutEffect, useState} from 'react';
import {BeaconProps} from '../../@types';
import styles from './index.module.scss';
import defaultStyles from '../index.module.scss';
import {injectUniqueKeyframe} from '../../utils/cssInjector';

const styleEl = document.createElement('style');
document.head.appendChild(styleEl);

const FillBeacon = ({size = 18, color = 'rgb(255, 0, 68)', className = '', style = {}}: BeaconProps) => {
	const [animation, setAnimation] = useState('none');

	useLayoutEffect(() => {
		const {animationName} = injectUniqueKeyframe(
			`0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 ${colorAlpha(color, 0.7)};
		}
		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		}
		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		}`,
			color,
		);

		setAnimation(animationName);
	}, [color]);

	return (
		<span
			style={style}
			className={[defaultStyles.defaultBeacon, styles.fillBeacon, className].join(' ')}
			data-testid='fill-beacon'
		>
			<button type='button' style={{width: size, height: size}}>
				<span className='pulse' style={{backgroundColor: color, animationName: animation, borderRadius: size}} />
			</button>
		</span>
	);
};

export default memo(FillBeacon);
