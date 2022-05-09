import {VideoList} from "./VideoList";
import {BigVideo} from "./BigVideo";

export const MainInfo: any = () => {
    return (
        <div className="mainInfo-wrapper">
            <BigVideo/>
            <div>
                <div className="mainInfo-title">Related</div>
                <VideoList/>
            </div>
        </div>
    );
}