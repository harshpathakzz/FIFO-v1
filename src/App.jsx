import React, { useState, useEffect } from "react";

import "./App.css";

// const Task = ({ task }) => {
//   return (
//     <div className="task">{`Task ${task.id} - Size: ${task.size} - Time: ${task.size} units`}</div>
//   );
// };

const GanttChart = ({ tasks }) => {
  const chartStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  return (
    <div className="gantt-chart" style={chartStyle}>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            width: `${task.size * 40}px`, // Adjusting the width based on task size
            backgroundColor: "#4caf50",
            color: "white",
            border: "1px solid #333",
            textAlign: "center",
            padding: "10px",
            margin: "5px",
          }}
        >
          {`Task ${task.id}`}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const [taskSize, setTaskSize] = useState(1);

  const addTask = () => {
    const newTask = { id: taskId, size: taskSize };
    setTasks([...tasks, newTask]);
    setTaskId(taskId + 1);
  };

  return (
    <div className="App">
      <h1>FIFO Queue Simulation</h1>
      <div>
        <label style={{ fontSize: "25px" }}>
          Task Size:
          <input
            type="number"
            value={taskSize}
            onChange={(e) => setTaskSize(parseInt(e.target.value))}
            style={{ margin: "5px" }}
          />
        </label>
        <button onClick={addTask} style={{ margin: "5px" }}>
          Add Task
        </button>
      </div>
      <div>
        <h2>Queue</h2>
      </div>
      {tasks.length > 0 && <GanttChart tasks={tasks} />}
    </div>
  );
};

export default App;
