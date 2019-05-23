import React from 'react';

const VideoCard = (props) => {
    const cardClick = (e) => {

        props.cardClick(props.video);
    }

    return (
        <div className="ui card  " onClick={cardClick} >
            <div className="image">
                <img src={props.video.snippet.thumbnails.default.url} alt="Hello" ></img>
            </div>
            <div className="content">
                <h4 className="header">{props.video.snippet.title}</h4>
            </div>
        </div>
    );
};

export default VideoCard;