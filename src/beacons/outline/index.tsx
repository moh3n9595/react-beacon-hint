import colorAlpha from 'color-alpha';
import {memo} from 'react';
import {BeaconProps} from '../../@types';

import styles from './index.module.scss';

const OutlineBeacon = ({size = 30, color = 'rgb(255, 0, 68)'}: BeaconProps) => {
	return (
		<span className={styles.outlineBeacon} data-testid='outline-beacon'>
			<button type='button' style={{width: size, height: size}}>
				<span className='inner' style={{backgroundColor: color}} />
				<span className='outer' style={{borderColor: color, backgroundColor: colorAlpha(color, 0.2)}} />
			</button>
		</span>
	);
};

export default memo(OutlineBeacon);
