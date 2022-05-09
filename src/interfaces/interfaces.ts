export interface IVideo {
    id: number,
    title: string,
    video_source: string,
    description: string,
    author: string,
    likes_counter: number,
    gender: string,
    related_videos: object[],
    comments: object[]
}