import {DataType} from 'csstype';
import {CSSProperties} from 'react';

/**
 * @category Props
 */
export interface BeaconProps {
	/**
	 * The size of the beacon
	 * @default `18` if FillBeacon, `30` if OutlineBeacon
	 */
	size?: number;
	/**
	 * The color of the beacon
	 * @default `rgb(255, 0, 68)`
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
	 */
	color?: DataType.Color;
	/**
	 * The class name of the beacon
	 */
	className?: string;
	/**
	 * The style of the beacon
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
	 */
	style?: CSSProperties;
}
