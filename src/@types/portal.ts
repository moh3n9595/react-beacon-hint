import {ReactNode} from 'react';

export interface PortalProps {
	children?: ReactNode;
	container?: Element | (() => Element | null) | null;
	disabled?: boolean;
}
