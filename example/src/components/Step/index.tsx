import {memo, PropsWithChildren} from 'react';
import styles from './index.module.scss';

interface IStep extends PropsWithChildren {
	text: string;
}

const Step = ({text, children}: IStep) => {
	return (
		<>
			<p className={`${styles.title} my-8 text-white text-2xl`}>{text}</p>
			<div className='w-full 2xl:w-4/5 flex flex-col-reverse items-center lg:flex-row justify-around xl:justify-evenly relative'>
				<span className={`${styles.line} ${styles.up} hidden lg:block`} />
				<span className={`${styles.circle} hidden lg:block`} />
				<span className={`${styles.line} ${styles.bottom} hidden lg:block`} />
				{children}
			</div>
		</>
	);
};

const MemoizedStep = memo(Step);
export {MemoizedStep as Step};
