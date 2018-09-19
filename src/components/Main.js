import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>
            <Link to="/">Unending Tasks</Link>
          </h1>
          <div className="loader">
            {this.props.loading ? (
              <p>loading...</p>
            ) : (
              <p>&nbsp;</p>
            )}
          </div>
        </header>
        <main>
          {React.cloneElement(this.props.children, this.props)}
        </main>
      </div>
    )
  }
}

export default Main;
