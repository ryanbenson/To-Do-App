import React from 'react';
import { connect } from "react-redux";
import Single from './Single';

class List extends React.Component {
  componentDidMount() {
    const { dispatch, getTasks } = this.props;
    getTasks();
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    this.props.addTask(name);
    this.refs.newTaskForm.reset();
  }

  render() {
    return (
      <div>
        <form ref="newTaskForm" className="new-task-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="name" placeholder="New task" />
          <input type="submit" hidden />
        </form>
        <ul>

          {this.props.tasks.map((task, i) => <Single {...this.props} key={i} i={i} task={task} />)}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestTasks: () => dispatch({ type: "GET_TASKS" })
  };
};

export default connect(null,mapDispatchToProps)(List);
