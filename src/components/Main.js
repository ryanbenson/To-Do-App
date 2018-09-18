import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <p>loading...</p>
        ) : (
          <p>&nbsp;</p>
        )}
        <h1>
          <Link to="/">Unending Tasks</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;
