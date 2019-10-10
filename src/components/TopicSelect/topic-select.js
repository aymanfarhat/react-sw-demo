import React, { Component } from 'react';

class TopicSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateTopic(event.target.value);
  }

  render() {
    return (
      <select name="topics" id="topics" onChange={this.handleChange}>
        <option value="">--Please choose a topic--</option>
        {this.props.topics.map((topic, key) => {
          return <option key={key} value={topic}>{topic}</option>
        })}
      </select>
    );
  }
}

export default TopicSelect;
