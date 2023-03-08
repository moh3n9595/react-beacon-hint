// eslint-disable-next-line unused-imports/no-unused-imports
import React from 'react';

const Video = ({title, url}: {title: string; url: string}) => {
	return (
		<video muted={true} loop={true} autoPlay={true} controls={false} playsInline={true} title={title} width='100%'>
			<source src={url} type='video/mp4' />
		</video>
	);
};

export default Video;
