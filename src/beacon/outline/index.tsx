import {forwardRef, memo} from 'react';

import colorAlpha from 'color-alpha';

import styles from './index.module.scss';

import {COLORS} from '../../constants';
import defaultStyles from '../index.module.scss';
import {type BeaconProps} from '../types';

const OutlineBeacon = forwardRef<HTMLSpanElement, BeaconProps>(
	({size = 30, color = COLORS.BEACON, className = '', style = {}}, ref) => {
		return (
			<span
				ref={ref}
				style={style}
				className={[
					defaultStyles.defaultBeacon,
					styles.outlineBeacon,
					className,
				].join(' ')}
				data-testid='outline-beacon'
			>
				<button type='button' style={{width: size, height: size}}>
					<span className='inner' style={{backgroundColor: color}} />
					<span
						className='outer'
						style={{
							borderColor: color,
							backgroundColor: colorAlpha(color, 0.2),
						}}
					/>
				</button>
			</span>
		);
	},
);

OutlineBeacon.displayName = 'OutlineBeacon';
/**
 * A outline beacon component that stick to the reference's edge in floating component.
 * @category Components
 * @example
 * ```jsx
 * <OutlineBeacon size={30} color='red' className='custom-class' style={{color: 'red'}} />
 * ```
 */
export default memo(OutlineBeacon);
