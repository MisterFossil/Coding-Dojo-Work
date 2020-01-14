import React, { useState } from 'react';

const ToDoForm = props => {
    // Setting the activities in state
    const [ activity, setActivity ] = useState("");
    // Setting if the activity has been completed
    const [ isComplete, setIsComplete ] = useState(false);
    // setting a task list to contain the text from a task and whether or not its been completed
    const [ taskList, setTaskList ] = useState([]);


    // Add the task from the form to the task list
    const addTaskToList = e => {
        e.preventDefault();
        let tempTasks = [...taskList];
        tempTasks.push({todo:activity, completed:isComplete})
        setTaskList(tempTasks);
        setActivity("");
    }

    // Delete a task from the list
    const removeTask = i => {
        let tempTasks = [...taskList];
        tempTasks.splice(i,1);
        setTaskList(tempTasks);
    }

    // Mark a task complete/incomplete
    const toggleTask = i => {
        let tempTasks = [...taskList]
        tempTasks[i].completed = !tempTasks[i].completed;
        setTaskList(tempTasks);
    }  
    
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={addTaskToList}>
                        <div className="form-entry">
                            <label>Task:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="activity" 
                                onChange={e => setActivity(e.target.value)} 
                                value={activity}/>
                        </div>
                        <div className="form-entry">
                            <input 
                                type="submit" 
                                value="Add" 
                                className="btn btn-outline-dark m-2 " />
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <table className="table table-dark table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Task</th>
                                <th>Done?</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                taskList.map( (task, i) => 
                                    <tr key={i}>
                                        <td>
                                            {task.completed ?
                                                <p className="strike">{task.todo}</p> :
                                                <p>{task.todo}</p>
                                            }
                                        </td>
                                        <td>
                                            {task.completed ? 
                                                <p onClick={ e => toggleTask(i) }>Not Done?</p> : 
                                                <p onClick={ e => toggleTask(i) }>Complete Task</p>
                                            }
                                        </td>
                                        <td>{task.completed ? <p onClick={ e => removeTask(i) } className="font-weight-bold">DELETE</p> : "JUST DO IT"}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ToDoForm;