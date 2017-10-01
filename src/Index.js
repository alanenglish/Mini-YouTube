import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyDdjEu5h7_2k8yg5WITlp71d6zW679B6XY';

// Create a new component - this component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // ES6 syntax whenever key and value are identical, condense to one word
      // this.setState({ videos: videos })
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }
  // use parens for multi-line JSX
  // pass prop of videos from this parent component to child component
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// downward data flow - only the most parent component in the app should be responsibel for fetching data
