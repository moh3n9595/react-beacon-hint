export const Wave = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
			<defs>
				<linearGradient id='gradient'>
					<stop offset='0%' stopColor='#14213D' />
					<stop offset='100%' stopColor='#000' />
				</linearGradient>
			</defs>
			<path
				fill='url(#gradient)'
				fillOpacity='1'
				d='M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,224C672,235,768,181,864,176C960,171,1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
			></path>
		</svg>
	);
};
