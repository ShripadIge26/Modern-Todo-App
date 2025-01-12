import editIcon from '../images/edit-pen-icon.svg'
import deleteIcon from '../images/delete-bin-icon.svg'
import tickIcon from '../images/tick-icon.svg'


const ListItem = ({index, task, editText, editableIndex, editedText, setEditedText, saveTask, deleteTask, handleKeyPress}) => {
    return (
        <li className=''>
            <div className="row task-list-main-row mx-0">
                <div className="row justify-content-between align-items-center mx-0">
                    <div className='col d-flex gap-2'>
                        <p className='mb-0 text-right'>{index + 1}.</p>
                        {editableIndex !== index ? (<p className='active-task-para text-break text-start'>{task}</p>) : (<input type='text' value={editedText} onChange={(e) => setEditedText(e.target.value)} className='w-100 me-2 editable-li-input' onKeyDown={(e) => handleKeyPress(e, saveTask)}/>)}
                    </div>
                    <div className='col col-2 d-flex justify-content-between'>
                        {editableIndex !== index ? (<button className='edit-button rounded' onClick={() => editText(index)}><img src={editIcon} alt='edit-icon' /></button>):(<button className='save-button rounded' onClick={saveTask}><img src={tickIcon} alt='save-icon' /></button>)}
                        
                        
                        <button className='delete-button rounded' onClick={() =>deleteTask(index)}><img src={deleteIcon} alt='delete-icon' /></button>
                    </div>  
                </div>
            </div>
        </li>
    )
}

export default ListItem