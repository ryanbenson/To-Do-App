import React from 'react';

class Single extends React.Component {
  render() {
    return (
      <p>{this.props.task.name}</p>
    );
  }
}

export default Single;
