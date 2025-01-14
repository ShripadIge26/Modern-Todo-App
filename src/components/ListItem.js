import editIcon from "../images/edit-pen-icon.svg";
import deleteIcon from "../images/delete-bin-icon.svg";
import tickIcon from "../images/tick-icon.svg";

const ListItem = ({
  task,
  editText,
  editableIndex,
  editedText,
  setEditedText,
  saveTask,
  deleteTask,
  handleKeyPress,
  handleCheckbox,
}) => {
  return (
    <li className="">
      <div className="row task-list-main-row mx-0">
        <div className="row justify-content-between align-items-center mx-0">
          <div className="col col-1">
            <input
              type="checkbox"
              className="task-complete-radio-btn form-check-input"
              onChange={() => handleCheckbox(task.id)}
              checked={task.isCompleted}
            />
          </div>
          <div className="col d-flex gap-2">
            {editableIndex !== task.id ? (
              <p
                className={`active-task-para text-break text-start ${
                  task.isCompleted ? "text-decoration-line-through" : ""
                }`}
              >
                {task.text}
              </p>
            ) : (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="w-100 me-2 editable-li-input"
                onKeyDown={(e) => handleKeyPress(e, saveTask)}
              />
            )}
          </div>
          <div className="col col-2 d-flex justify-content-between">
            {editableIndex !== task.id ? (
              <button
                className="edit-button rounded"
                onClick={() => editText(task.id)}
              >
                <img src={editIcon} alt="edit-icon" />
              </button>
            ) : (
              <button className="save-button rounded" onClick={saveTask}>
                <img src={tickIcon} alt="save-icon" />
              </button>
            )}

            <button
              className="delete-button rounded"
              onClick={() => deleteTask(task.id)}
            >
              <img src={deleteIcon} alt="delete-icon" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
