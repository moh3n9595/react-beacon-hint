import {memo} from 'react';
import styles from './index.module.scss';

interface IProps {
	text: string;
}

const Box = ({text}: IProps) => {
	return <button className={styles.box}>{text}</button>;
};

const MemoizedBox = memo(Box);
export {MemoizedBox as Box};
