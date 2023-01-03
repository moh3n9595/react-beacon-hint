import {DataType} from 'csstype';
import {CSSProperties} from 'react';

export interface BeaconProps {
	size?: number;
	color?: DataType.Color;
	className?: string;
	style?: CSSProperties;
}
