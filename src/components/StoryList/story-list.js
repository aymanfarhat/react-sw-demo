import React, {Component} from 'react';

class StoryList extends Component {
  constructor(props) {
    super(props);
  }

    render () {
        return <div>
  <div className="scroll">
    <section>
      <ul className="stories-list">
        {this.props.videos.map((video, i) => {
          return (
          <li className="story" key={i}>
            <img src={video.thumbnails.default.url}/>
            <div className="story-details">
              <div className="story-details__title">{ video.title }</div>
              <div className="story-details__desc">{ video.description }</div>
            </div>
          </li>
          )
        })}
      </ul>
    </section>
  </div>
  </div>
  }
}
export default StoryList;