import React, {Component} from 'react';
import StoryList from '../StoryList/story-list';
import Header from '../Header/header';
import TopicSelect from '../TopicSelect/topic-select';

class App extends Component {
    constructor(props) {
      super(props);
      this.key = 'AIzaSyAynqNUYhmJeHSQzaSEjgwwLCw0OC_9_a4';
      this.state = {
        isFetching: false,
        videoTopics: [
          'Latin music',
          'Daft Punk',
          'Shakira',
          'Tiesto',
        ],
        videos: [],
        selectedTopic: null,
        dataMissing: false
      }

      this.handleTopicUpdate = this.handleTopicUpdate.bind(this);
    }
  
    render () {
      let bodyContent = <StoryList videos={this.state.videos} />;

      if(this.state.dataMissing) {
        bodyContent = 'Data is missing...';
      }

      return (
        <div>
          <Header/> 
          <TopicSelect topics={this.state.videoTopics} updateTopic={this.handleTopicUpdate} />
          {bodyContent}
        </div>
      );
  }

  handleTopicUpdate(topicName) {
    this.fetchVideos(this.key, topicName);
    this.setState({
      selectedTopic: topicName
    });
  }

  fetchVideos(key, topic) {
    let endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${topic}&key=${key}`;

    fetch(endpoint)
    .then(response => {
        return response.json()
    })
    .then((data) => {
      let snippets = data.items.map((item) => {
        return item.snippet;
      });

      this.setState({videos: snippets, dataMissing: false});
    })
    .catch((e) => {
      this.setState({dataMissing: true});
    });
  }
}

export default App;