import {IVideo} from "../interfaces/interfaces";
import {useContext} from "react";
import {VideoDataContext} from "../context";

export const SearchResultsTemplate: any = ({data}: { data: IVideo[] }) => {
    const {watchThisVideo} = useContext(VideoDataContext);
    if (data.length === 0) {
        return (
            <div className='search-emptyTemplate'>Sorry, nothing find</div>
        )
    }

    return (
        <div className="search-templateWrapper">
            {data.map((item) => (
                <div className='search-templateItem' key={item.id} onClick={(e) => {
                    watchThisVideo(item)
                }}>
                    <img className='search-templateImg'src={item.video_source}/>
                    <div>
                        <div className='search-templateTitle'>{item.title}</div>
                        <div className='search-templateDescription'>{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}