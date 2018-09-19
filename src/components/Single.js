import React from 'react';

class Single extends React.Component {

  state = {
    inputValue: ''
  }

  componentDidMount() {
   this.setState({inputValue: this.props.task.name});
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.props.task.id;
    const name = this.refs.name.value;
    this.props.editTask(id, name);
  }

  handleChange(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <li>
        <button onClick={this.props.removeTask.bind(null, this.props.task.id)}>&times;</button>
        <input type="text" ref="name" onChange={this.handleChange.bind(this)} placeholder="Task Info" value={this.state.inputValue} />
        <button onClick={this.handleSubmit.bind(this)}>Update</button>
      </li>
    );
  }
}

export default Single;
