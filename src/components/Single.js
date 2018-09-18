import React from 'react';

class Single extends React.Component {
  render() {
    return (
      <p><button onClick={this.props.removeTask.bind(null, this.props.task.id)}>&times;</button> {this.props.task ? this.props.task.name : 'Missing'}</p>
    );
  }
}

export default Single;
