import {forwardRef, memo, useLayoutEffect, useState} from 'react';

import colorAlpha from 'color-alpha';

import styles from './index.module.scss';

import {COLORS} from '../../constants';
import {injectUniqueKeyframe} from '../../utils/cssInjector';
import defaultStyles from '../index.module.scss';
import {type BeaconProps} from '../types';

const FillBeacon = forwardRef<HTMLSpanElement, BeaconProps>(
	({size = 18, color = COLORS.BEACON, className = '', style = {}}, ref) => {
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
				ref={ref}
				style={style}
				className={[
					defaultStyles.defaultBeacon,
					styles.fillBeacon,
					className,
				].join(' ')}
				data-testid='fill-beacon'
			>
				<button type='button' style={{width: size, height: size}}>
					<span
						className='pulse'
						style={{
							backgroundColor: color,
							animationName: animation,
							borderRadius: size,
						}}
					/>
				</button>
			</span>
		);
	},
);

FillBeacon.displayName = 'FillBeacon';

/**
 * A fill beacon component that stick to the reference's edge in floating component.
 * @category Components
 * @example
 * ```jsx
 * <FillBeacon size={18} color='red' className='custom-class' style={{color: 'red'}} />
 * ```
 */
export default memo(FillBeacon);
