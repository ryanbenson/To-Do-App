import React from 'react';

class Single extends React.Component {
  render() {
    return (
      <p>{this.props.task ? this.props.task.name : 'Missing'}</p>
    );
  }
}

export default Single;
