import React, { Component } from 'react';
import 'whatwg-fetch';
import TaskItem from '../TaskItem/TaskItem';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.newTask = this.newTask.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos/uid/1')
      .then(res => res.json())
      .then(json => {
        this.setState({
          todos: json,
          newTodo: {}
        });
      });
  }

  newTask() {
    if(!this.refs.newTaskTitle.value.length){
      return;
    }
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title: this.refs.newTaskTitle.value, userId: 1 }),
      headers: {"Content-Type": "application/json"}
     })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        let data = this.state.todos;
        data.push(json);
        this.setState({
          todos: data
        });
        this.refs.newTaskTitle.value = '';
      });
  }

  /*deleteTask(index) {
    const id = this.state.counters[index]._id;
    fetch(`/api/todo/${id}`, { method: 'DELETE' })
      .then(todos => {
        console.log(todos);
      });
  }*/

  toogleTask(task){
    task.completed = !task.completed;
    fetch(`/api/todos/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify({newTask: task}),
      headers: {"Content-Type": "application/json"}
     })
      .then(res => res.json())
      .then(json => {
        this.setState(Object.assign({}, this.state, {
          todos: this.state.todos.map((td, index) => {
            if(task._id === td._id){
              return task;
            }
            return td;
          })
        }));
      });
  }

  render() {
    return (
      <div>
        <p>Todos:</p>
        <ul>
          {this.state.todos.map( a => (<TaskItem key={a._id} data={a} clickHandler={ () => this.toogleTask(a) }/>) )}
        </ul>
        New task title: <input type='text' ref='newTaskTitle'/>
        <br />
        <button onClick={this.newTask}>New Task</button>
      </div>
    );
  }
}

export default Home;
