import React, { useState } from 'react';
const ToDoForm = props => {
    const [ state, setState ] = useState({
        activity: "",
        tasks: [],
    })
    const onChangeHandler = e => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value,
            
        })
    }
    // changing my task to complete when the checkbox is toggled
    const onTaskComplete = e => {
        // console.log(i);
        console.log(e);
        e.preventDefault();
        setState({
            ...state,
            completed: !state.completed
        })
        console.log(state);
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        const taskToAdd = {
            activity: state.activity,
            isCompleted: false,
        };
        const arrayToUpdate = [...state.tasks];
        arrayToUpdate.push(taskToAdd);
        console.log(state);
        setState({
            ...state,
            activity: "",
            tasks: arrayToUpdate,
        })
    }
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-entry">
                            <label>Task:</label>
                            <input type="text" className="form-control" name="activity" onChange={onChangeHandler} value={state.activity}/>
                        </div>
                        <div className="form-entry">
                            <input type="submit" value="Add" className="btn btn-outline-dark m-2 " />
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
                                state.tasks.map( (task, i) => 
                                    <tr key={i}>
                                        <td>{task.activity}</td>
                                        <td>
                                            
                                            <input 
                                                type="checkbox" 
                                                name="completed" 
                                                onClick={onTaskComplete}
                                                className="form-control"
                                                defaultChecked={task.completed}
                                                
                                            />
                                        </td>
                                        <td>{state.completed ? "Delete?" : "JUST DO IT"}</td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                    <input type="checkbox" name="randoBox" id="" defaultChecked={!state.completed}/>
                </div>
            </div>
        </>
    );
}

export default ToDoForm;