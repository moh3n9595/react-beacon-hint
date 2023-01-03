import colorAlpha from 'color-alpha';
import {memo} from 'react';
import styled, {keyframes} from 'styled-components';
import {BeaconProps} from '../../@types';
import styles from './index.module.scss';

const FillBeacon = ({size = 18, color = 'rgb(255, 0, 68)', className = '', style = {}}: BeaconProps) => {
	const animation = keyframes`
		0% {
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
		}
	`;

	const Pulse = styled.span`
		animation-name: ${animation};
		border-radius: ${size}px;
	`;

	return (
		<span style={style} className={[styles.fillBeacon, className].join(' ')} data-testid='fill-beacon'>
			<button type='button' style={{width: size, height: size}}>
				<Pulse className='pulse' style={{backgroundColor: color}} />
			</button>
		</span>
	);
};

export default memo(FillBeacon);
