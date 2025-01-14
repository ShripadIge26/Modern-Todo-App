import logo from "../images/todo-logo-grad.svg";
import ListItem from "./ListItem";
import { useRef, useState } from "react";

const Todo = () => {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addNewTask = () => {
    let currentTask = inputRef.current.value;

    if (currentTask.trim()) {
      const newTask = {
        id: Date.now(),
        text: currentTask.trim(),
        isCompleted: false,
      };

      setTasks([...tasks, newTask]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e, handleFunction) => {
    if (e.key === "Enter") {
      handleFunction();
    }
  };

  const handleCheckbox = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const editText = (id) => {
    setEditableIndex(id);
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditedText(taskToEdit.text);
  };

  const saveTask = () => {
    if (editedText.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === editableIndex ? { ...task, text: editedText.trim() } : task
        )
      );
      setEditableIndex(null);
      setEditedText("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
                    {tasks.filter((task) => !task.isCompleted).length === 0 ? (
                      <li className="h-100 d-flex align-items-center justify-content-center">
                        No Tasks Found
                      </li>
                    ) : (
                      tasks
                        .filter((task) => !task.isCompleted)
                        .map((item) => (
                          <ListItem
                            key={item.id}
                            editText={editText}
                            task={item}
                            editableIndex={editableIndex}
                            editedText={editedText}
                            setEditedText={setEditedText}
                            saveTask={saveTask}
                            deleteTask={deleteTask}
                            handleKeyPress={handleKeyPress}
                            handleCheckbox={handleCheckbox}
                          />
                        ))
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col col-4">
              <h2 className="h2 fw-light mb-0">FINISHED TASKS</h2>
              <ul className="d-flex max-h-100 flex-column gap-2">
                {tasks.filter((task) => task.isCompleted).length === 0 ? (
                  <li className="h-100 d-flex align-items-center justify-content-center">
                    No Finished Tasks
                  </li>
                ) : (
                  tasks
                    .filter((task) => task.isCompleted)
                    .map((item) => (
                      <ListItem
                        key={item.id}
                        editText={editText}
                        task={item}
                        editableIndex={editableIndex}
                        editedText={editedText}
                        setEditedText={setEditedText}
                        saveTask={saveTask}
                        deleteTask={deleteTask}
                        handleKeyPress={handleKeyPress}
                        handleCheckbox={handleCheckbox}
                      />
                    ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
