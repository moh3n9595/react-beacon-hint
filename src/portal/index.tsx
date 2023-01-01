import {memo, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {PortalProps} from '../@types';

const Portal = ({children, container, disabled = false}: PortalProps) => {
	const [mountNode, setMountNode] = useState<Element>();

	useEffect(() => {
		if (!disabled) {
			setMountNode((typeof container === 'function' ? container() : container) || document.body);
		}
	}, [container, disabled]);

	if (disabled) {
		return <>{children}</>;
	}

	return <>{mountNode ? createPortal(children, mountNode) : mountNode}</>;
};

const MemoizedPortal = memo(Portal);
export {MemoizedPortal as Portal};
