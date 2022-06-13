import React from 'react';
import "./Tasks.css";
const Task = ({ task }) => {
    return <div className="task-container">{task.title}</div>; 
}
 
export default Task;