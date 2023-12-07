import React, { useState } from "react";

let id = 0;

const INITAL_TASK = [{ id: id++, label: "Hi play football" }];

const ToToLIst = () => {
  const [tasks, setTasks] = useState(INITAL_TASK);
  const [newTask, setNewTask] = useState("");
  return (
    <>
      <h1>ToDOList</h1>
      <div>
        <input
        className="border-black"
          type="text"
          placeholder="Add you Task"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <div>
          <button
            onClick={() => {
              setTasks(
                tasks.concat({
                  id: id++,
                  label: newTask.trim(),
                })
              );
              setNewTask("");
            }}
          >submit</button>
        </div>
      </div>
      <ul>
        {tasks.map(({id,label}) => (
          <li key={id}>
            <span>{label}</span>
            <button onClick={()=>{
                setTasks(
                  tasks.filter((task)=> task.id !== id)
                )
              }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToToLIst;
