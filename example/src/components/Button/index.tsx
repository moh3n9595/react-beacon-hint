import {memo} from 'react';

interface ButtonProps {
	value: string;
	leftIcon?: React.ReactNode;
	onClick?: () => void;
}

const Button = ({value, leftIcon, onClick}: ButtonProps) => {
	return (
		<div className='bg-indigo-100 rounded-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer flex items-center justify-center'>
			<button onClick={onClick} className='p-3 w-[240px] flex flex-row items-center justify-center font-mono font-bold'>
				{leftIcon && <div className='mr-2'>{leftIcon}</div>}
				{value}
			</button>
		</div>
	);
};

const MemoizedButton = memo(Button);
export {MemoizedButton as Button};
