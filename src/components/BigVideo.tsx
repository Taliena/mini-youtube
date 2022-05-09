import {VideoDataContext} from "../context";
import {useContext} from "react";
import {CommentComponent} from "./CommentsComponent";

export const BigVideo: any = () => {
    const {videoToWatch} = useContext(VideoDataContext);
    return (
        <div className='bigVideo-wrapper'>
            <div className='bigVideo-videoWrapper'>
                <img className='bigVideo-video' src={videoToWatch.video_source}/>
            </div>
            <div className='bigVideo-description'>
                <div className='bigVideo-description_title'>{videoToWatch.title}</div>
                <div className='bigVideo-description_likes'>
                    <div className='bigVideo-description_likesCounter' title='likes/dislakes'>
                        <span>{videoToWatch.likes_counter}</span>
                        <span>/</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div className='bigVideo-description_text'>
                {videoToWatch.description}
            </div>
            <div className='bigVideo-description_comments'>
                <div className='bigVideo-description_commentsTitle'>Comments</div>
                <CommentComponent data={videoToWatch.comments}/>
            </div>
        </div>
    );
}