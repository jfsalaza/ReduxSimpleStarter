//Individual Component or Views are snippets of code that produce HTML
//Write multiple components nest one inside another to make applications easier
//Component in JS that converts to HTML

import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCwHILyfCHNgWPTndrx5-3c7poaFoWPC98';


//Create a new component. This component should produce some HTML
//ES6 syntax
//HTML looking code is really javascript, babel transpiles the code into HTML
//This is how JSX renders to the DOM
class App extends Component{

    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term:term}, (videos) => {
            this.setState({videos: videos,
            selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return(
            <div>
                <SearchBar onSearchTermChange = {videoSearch} />
                <VideoDetail video = {this.state.selectedVideo}/> {/*this is a callback*/}
                <VideoList
                 onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                 videos = {this.state.videos} /> {/*Passing props with videos in VideoList*/}
            </div>
        );
    }
}

//Take this component's generated HTML and put it 
//on the page (in the DOM)
//<App /> create instance of App

ReactDOM.render(<App />, document.querySelector('.container'));



