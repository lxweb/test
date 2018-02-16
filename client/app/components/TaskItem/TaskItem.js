import React, { Component } from 'react';
import 'whatwg-fetch';

import {Link} from 'react-router-dom'

const TaskItem = (props) => (
  <li key={props.data._id} className="taskItem">
    <p className={props.data.completed?'done':''} onClick={props.clickHandler}>{props.data.title}</p>
    <button onClick={props.clickXHandler}>x</button>
  </li>)

//  <Link to={`/task/${props.data.id}`}>{props.data.title}</Link>
export default TaskItem;
