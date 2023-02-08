import {memo, PropsWithChildren} from 'react';
import styles from './index.module.scss';

type IProps = PropsWithChildren;

const Result = ({children}: IProps) => {
	return (
		<div className={`${styles.result} rounded-lg h-full mt-5 lg:mt-0 flex items-center justify-center`}>{children}</div>
	);
};

const MemoizedResult = memo(Result);
export {MemoizedResult as Result};
