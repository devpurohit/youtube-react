import React from 'react';

import VideoCard from './VideoCard'

const ResultList = (props) => {

    function cardClick(video) {
        props.cardClick(video);
    }

    const results = props.videos.map((video, index) =>
        <VideoCard video={video} key={index} cardClick={cardClick} />
    )
    return results;
}

export default ResultList;