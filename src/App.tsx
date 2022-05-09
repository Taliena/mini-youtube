import React, {useState, useEffect} from 'react';
import {Search} from "./components/Search";
import {MainInfo} from "./components/MainInfo";
import {IVideo} from "./interfaces/interfaces";
import {VideoDataContext} from "./context";
import {SearchResultsTemplate} from "./components/SearchResultsTemplate";
import './styles/App.scss';


export const App = () => {
    const [data, setData]: [IVideo[], Function] = useState([]);
    const [isLoading, setIsLoading]: [boolean, Function] = useState(false);
    const [isSearching, setIsSearching]: [boolean, Function] = useState(false);
    const [isError, setIsError]: [boolean, Function] = useState(false)
    const [searchedList, setSearchedList]: [IVideo[], Function] = useState([]);
    const [searchValue, setSearchValue]: [string, Function] = useState('');
    const [watchedList, setWatchedList]: [IVideo[], Function] = useState([]);
    const [relatedList, setRelatedList]: [IVideo[], Function] = useState([]);
    const [bigVideo, setBigVideo]: [IVideo, Function] = useState({
        id: 2,
        title: "Tempsoft",
        description: "Canis lupus",
        video_source: "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
        author: "lburkhill1",
        likes_counter: 2,
        gender: "Male",
        related_videos: [{}, {}],
        comments: [{}, {}, {}, {}, {}, {}, {}]
    });


    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const results: any = require("./MOCK_DATA/MOCK_DATA 1.json");
                setData(results);
                let list = [];
                for (let i = 0; i < 6; i++) {
                    list.push(results[Math.floor(Math.random() * 100)]);
                }
                setRelatedList(list);
                setBigVideo(results[Math.floor(Math.random() * 100)]);

                setIsError(false);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);

    const startSearch = () => {
        if (searchValue !== '') {
            setIsSearching(true);
            var searchedVideos = data.filter(function (el) {
                return el.title.indexOf(searchValue) >= 0 || el.description.indexOf(searchValue) >=0;
            });
            setSearchedList(searchedVideos);
        } else {
            setIsSearching(false);
        }
    };

    const changeSearch = (value: string) => {
        setSearchValue(value);
    };

    const watchThisVideo = (item: IVideo) => {
        setBigVideo(item);
        setIsSearching(false);
        let list = [];
        list.push(...watchedList);
        for (let i = 0; i < 6 - watchedList.length; i++) {
            list.push(data[Math.floor(Math.random() * 100)]);
        }
        setRelatedList(list);
        let listWasWatched: IVideo[] = watchedList;
        listWasWatched.unshift(item);
        if (listWasWatched.length > 2) {
            listWasWatched.length = 2;
        }
        setWatchedList(listWasWatched);
    };

    if (isLoading) {
        return <div className="App">Loading</div>
    }
    if (isError) {
        return <div className="App">Sorry, something were wrong</div>
    }

    if (isSearching) {
        return (
            <VideoDataContext.Provider
                value={{relatedList: relatedList, watchThisVideo: watchThisVideo, videoToWatch: bigVideo}}>
                <Search startSearch={startSearch} searchValue={searchValue} changeSearch={changeSearch}/>
                <SearchResultsTemplate data={searchedList} watchThisVideo={watchThisVideo}/>
            </VideoDataContext.Provider>
        );
    }

    return (
        <VideoDataContext.Provider
            value={{relatedList: relatedList, watchThisVideo: watchThisVideo, videoToWatch: bigVideo}}>
            <Search startSearch={startSearch} searchValue={searchValue} changeSearch={changeSearch}/>
            <MainInfo/>
        </VideoDataContext.Provider>
    );
};
