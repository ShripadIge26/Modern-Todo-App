import logo from "../images/todo-logo-grad.svg";
import ListItem from "./ListItem";
import { useRef, useState } from "react";

const Todo = () => {
  console.log("render");
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addNewTask = () => {
    let currentTask = inputRef.current.value;

    if (currentTask.trim()) {
      setTasks([...tasks, currentTask]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
    console.log(tasks);
  };

  const handleKeyPress = (e, handleFunction) => {
    if (e.key === "Enter") {
        handleFunction();
    }
  };

  const editText = (index) => {
    setEditableIndex(index);
    setEditedText(tasks[index]);
  };

  const saveTask = () => {
    if (editedText.trim()) {
      setTasks(
        tasks.map((task, index) =>
          index === editableIndex ? editedText : task
        )
      );
      setEditableIndex(null);
      setEditedText("");
    }
  };

  const deleteTask = (currentIndex) => {
    setTasks(tasks.filter((_, index) => index !== currentIndex ))
  }

  return (
    <div className="container-fluid main-colum1 d-flex align-items-between flex-column gap-5">
      <div className="row main-first-row mx-0">
        <div className="col d-flex align-items-center justify-content-between p-0 m-0">
          <img
            className="img-fluid logo-image ms-0 m-2"
            src={logo}
            alt="logo"
          />
          <button className="subscribe-button rounded">SUBSCRIBE</button>
        </div>
      </div>

      <div className="row main-second-row mx-0 d-flex overflow-hidden flex-grow-1">
        <div className="col max-h-100 main-content-wrapper d-flex flex-column">
          <div className="row title-row mx-0">
            <div className="col text-start">
              <h1 className="h1 mb-0">PLAN YOUR DAY</h1>
              <h2 className="h2 fw-light">OWN YOUR GOALS</h2>
            </div>
          </div>
          <div className="row">
            <div className="col col-8"></div>
            <div className="col col-4">
              <h2 className="h2 fw-light mb-0">FINISHED TASKS</h2>
            </div>
          </div>
          <div className="row mx-0 max-h-100 d-flex overflow-hidden flex-grow-1">
            <div className="col col-8 d-flex flex-column task-wrapper-col max-h-100">
              <div className="row task-input-row mx-0">
                <div className="col col-11 text-start">
                  <input
                    ref={inputRef}
                    onKeyDown={(e) => handleKeyPress(e, addNewTask)}
                    type="text"
                    placeholder="START TYPING HERE..."
                    className="rounded"
                    name="taskInput"
                  />
                </div>
                <div className="col col-1">
                  <button onClick={addNewTask} className="rounded">
                    +
                  </button>
                </div>
              </div>
              <div className="row my-tasks-heading mx-0 my-4">
                <div className="col text-start">    
                  <h2 className="h2 fw-light mb-0">ACTIVE TASKS</h2>
                </div>
              </div>

              <div className="row active-task-list max-h-100 d-flex mx-0 overflow-hidden flex-grow-1">
                <div className="col max-h-100  d-flex flex-column">
                  <ul className="d-flex max-h-100   flex-column gap-2">
                    {tasks.length === 0 ? (
                      <li className="h-100 d-flex align-items-center justify-content-center">
                        No Tasks Found
                      </li>
                    ) : (
                      tasks.map((item, index) => (
                        <ListItem
                          key={index}
                          editText={editText}
                          index={index}
                          task={item}
                          editableIndex={editableIndex}
                          editedText={editedText}
                          setEditedText={setEditedText}
                          saveTask={saveTask}
                          deleteTask={deleteTask}
                          handleKeyPress={handleKeyPress}
                        />
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
