import './wave.scss';
export const Wave = () => {
	return (
		<svg
			width='100%'
			height='100%'
			id='svg'
			viewBox='0 0 1440 400'
			xmlns='http://www.w3.org/2000/svg'
			className='transition duration-300 ease-in-out delay-150'
		>
			<defs>
				<linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
					<stop offset='5%' stopColor='#002bdc'></stop>
					<stop offset='95%' stopColor='#32ded4'></stop>
				</linearGradient>
			</defs>
			<path
				d='M 0,400 C 0,400 0,133 0,133 C 89.22488038277513,140.52153110047846 178.44976076555025,148.04306220095694 274,158 C 369.55023923444975,167.95693779904306 471.42583732057415,180.34928229665073 567,169 C 662.5741626794259,157.65071770334927 751.8468899521531,122.55980861244018 847,108 C 942.1531100478469,93.44019138755982 1043.1866028708134,99.41148325358851 1143,107 C 1242.8133971291866,114.58851674641149 1341.4066985645932,123.79425837320574 1440,133 C 1440,133 1440,400 1440,400 Z'
				stroke='none'
				strokeWidth='0'
				fill='url(#gradient)'
				fillOpacity='0.53'
				className='transition-all duration-300 ease-in-out delay-150 path-0'
			></path>
			<defs>
				<linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
					<stop offset='5%' stopColor='#002bdc'></stop>
					<stop offset='95%' stopColor='#32ded4'></stop>
				</linearGradient>
			</defs>
			<path
				d='M 0,400 C 0,400 0,266 0,266 C 83.48325358851676,262.6985645933014 166.96650717703352,259.39712918660285 268,254 C 369.0334928229665,248.60287081339715 487.6172248803829,241.11004784688998 598,258 C 708.3827751196171,274.88995215311 810.5645933014353,316.1626794258373 910,312 C 1009.4354066985647,307.8373205741627 1106.1244019138755,258.23923444976083 1194,243 C 1281.8755980861245,227.7607655502392 1360.9377990430621,246.88038277511959 1440,266 C 1440,266 1440,400 1440,400 Z'
				stroke='none'
				strokeWidth='0'
				fill='url(#gradient)'
				fillOpacity='1'
				className='transition-all duration-300 ease-in-out delay-150 path-1'
			></path>
		</svg>
	);
};
