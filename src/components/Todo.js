import logo from '../images/todo-logo-grad.svg'

const Todo = () => {
    return (
        <div className="container-fluid main-colum1">
            <div className="row m-auto">
                <div className="col d-flex align-items-center justify-content-between p-0 m-0">
                    <img className="img-fluid logo-image ms-0 m-2" src={logo} />
                    <button className="subscribe-button rounded">SUBSCRIBE</button>
                </div>
            </div>
            <div className="row title-row ms-auto">
                <div className="col text-start">
                    <h1 className='h1 mb-0'>PLAN YOUR DAY</h1>
                    <h2 className='h2 fw-light'>OWN YOUR GOALS</h2>
                </div>
            </div>
            <div className="row ms-auto">
                <div className="col col-8 task-wrapper-col">
                    <div className="row task-input-row">
                        <div className="col col-11 text-start">
                            <input type='text' placeholder='START TYPING HERE...' className='rounded'/>
                        </div>
                        <div className="col col-1">
                            <button className='rounded'>+</button>
                        </div>
                    </div>
                    <div className="row my-tasks-heading">
                        <div className="col text-start">
                            <h2 className='h2 fw-light'>ACTIVE TASKS</h2>
                        </div>
                    </div>
                    <div className="row active-task-list">
                        <div className="col">
                            <ul>
                                <li>
                                    <div className="row task-list-main-row">
                                        <div className="col col-1">1.</div>
                                        <div className="col"><p className='active-task-para text-break text-start'>Water the plants, hope for survival.</p></div>
                                        <div className="col col-1"><button></button></div>
                                        <div className="col col-1"></div>
                                        <div className="col col-1"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col col-4"></div>
            </div>
        </div>
    )
}

export default Todo