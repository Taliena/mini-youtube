import React, {useContext} from 'react';
import {VideoDataContext} from "../context";

export const VideoList: any = () => {
    const {relatedList, watchThisVideo} = useContext(VideoDataContext);
    if (relatedList.length === 0) {
        return (
            <div>Sorry, nothing find</div>
        )
    }

    return (
        <div className="videoList-wrapper">
            <div className='videoList-wrappedItems'>
                {relatedList.map((item) => (
                    <div className='videoList-item' key={item.id} onClick={(e) => {
                        watchThisVideo(item)
                    }}>
                        <img className='videoList-item_img' src={item.video_source}/>
                        <div className='videoList-item_text'>
                            <div className='videoList-item_title'>{item.title}</div>
                            <div className='videoList-item_description'>{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}