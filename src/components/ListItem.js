import editIcon from '../images/edit-pen-icon.svg'
import deleteIcon from '../images/delete-bin-icon.svg'
import tickIcon from '../images/tick-icon.svg'

const ListItem = () => {
    return (
        <li className='flex-grow-1'>
            <div className="row task-list-main-row mx-0">
                <div className="row justify-content-between align-items-center mx-0">
                    <div className='col d-flex gap-2'>
                        <p className='mb-0'>1.</p>
                        <p className='active-task-para text-break text-start'>Water the plants, hope for survival.</p>
                    </div>
                    <div className='col col-2 d-flex justify-content-between'>
                        <button className='edit-button rounded'><img src={editIcon} alt='edit-icon' /></button>
                        <button className='delete-button rounded'><img src={deleteIcon} alt='delete-icon' /></button>
                        <button className='save-button rounded'><img src={tickIcon} alt='save-icon' /></button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ListItem