import React from 'react';
import { connect } from "react-redux";
import Single from './Single';

class List extends React.Component {
  componentDidMount() {
    const { dispatch, getTasks } = this.props;
    getTasks();
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map((task, i) => <Single {...this.props} key={i} i={i} task={task} />)}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestTasks: () => dispatch({ type: "GET_TASKS" })
  };
};

export default connect(null,mapDispatchToProps)(List);
