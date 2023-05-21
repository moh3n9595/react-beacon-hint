export const quickStartCode = `import {Hint} from 'react-beacon-hint';

const Component = () => {
  return (
  	<Hint popover='Yay! I appeared!'>
				<button>Click The Hint</button>
		 </Hint>
  );
};`;

export const FloatingCode = `import {Floating} from 'react-beacon-hint';
import {offset} from '@floating-ui/react';

const Component = () => {
  return (
  	<Floating
			floatingComponent={<FillBeacon />}
				open
				placement='left'
				disablePortal
				middleware={[offset(-10)]}
			>
				<div>Submit</div>
			</Floating>
  );
};`;

export const ArrowCode = `import {Floating} from 'react-beacon-hint';
import {offset, limitShift, shift} from '@floating-ui/react';

const Component = () => {
  return (
  	<Floating
			arrow={{enabled: true, size: 10, style: {backgroundColor: '#ff7f50'}}}
			floatingComponent={
				<div className='flex items-center justify-center w-max-[50px] min-h-[50px] text-center bg-[#ff7f50] px-2'>
					I&apos;m Arrow!
				</div>
			}
			middleware={[shift({limiter: limitShift()}), offset(10)]}
			open
			placement='left'
		>
			<Box text='Submit' />
		</Floating>
  );
};`;

export const PopoverCode = `import {Popover} from 'react-beacon-hint';

const Component = () => {
  return (
		<>
  	<Popover text={User Onboarding Component for React with Fully Configurable Options!} />
		<Box text='Submit' />
		</>
  );
};`;
