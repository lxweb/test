import React, { Component } from 'react';
import 'whatwg-fetch';

import {Link} from 'react-router-dom'

class TaskDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      task: {
        title: 'Loading',
        editing: false
      }
    }
  }

  componentDidMount() {
    fetch(`/api/todos/${this.props.match.params.tid}`)
      .then(res => res.json())
      .then(json => {
        if(!json.length){
          this.props.history.push('/');
        }
        this.setState({
          task: json[0]
        });
      });
  }

  removeTask(id){
    fetch(`/api/todos/${this.props.match.params.tid}`, {method: 'DELETE'})
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
  }

  render(){
    let {task} = this.state;
    return (
      <React.Fragment>
        <h1>{task.title}</h1>
        editing
        <button onClick={ ()=>this.removeTask(task._id)} > Delete </button>
        <button onClick={ ()=>this.setState({editing: !this.state.editing})} >
          {this.state.editing ? 'Edit': 'Save'}
        </button>

      </React.Fragment>
    )
  }
}

export default TaskDetail;
