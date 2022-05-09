import React from 'react';
import {IVideo} from "./interfaces/interfaces";

let videoList: IVideo[] = [];
let video: IVideo = {
    id: 2,
    title: "Tempsoft",
    description: "Canis lupus",
    video_source: "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
    author: "lburkhill1",
    likes_counter: 2,
    gender: "Male",
    related_videos: [{}, {}],
    comments: [{}, {}, {}, {}, {}, {}, {}]
};

const defaultValue: {relatedList: IVideo[], watchThisVideo: Function, videoToWatch: IVideo} = {relatedList: videoList,
    watchThisVideo: new Function(), videoToWatch: video};

export const VideoDataContext = React.createContext(defaultValue);

