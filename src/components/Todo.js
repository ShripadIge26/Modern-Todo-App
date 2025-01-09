import logo from '../images/todo-logo-grad.svg'
import ListItem from './ListItem'

const Todo = () => {
    return (
        <div className="container-fluid main-colum1 d-flex align-items-between flex-column gap-5">
            <div className="row main-first-row mx-0">
                <div className="col d-flex align-items-center justify-content-between p-0 m-0">
                    <img className="img-fluid logo-image ms-0 m-2" src={logo} alt='logo' />
                    <button className="subscribe-button rounded">SUBSCRIBE</button>
                </div>
            </div>

            <div className="row main-second-row mx-0 d-flex overflow-hidden">
                <div className="col max-h-100 main-content-wrapper d-flex flex-column">
                    <div className="row title-row mx-0">
                        <div className="col text-start">
                            <h1 className='h1 mb-0'>PLAN YOUR DAY</h1>
                            <h2 className='h2 fw-light'>OWN YOUR GOALS</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-8"></div>
                        <div className="col col-4">
                            <h2 className='h2 fw-light mb-0'>FINISHED TASKS</h2>
                        </div>
                    </div>
                    <div className="row mx-0 max-h-100 d-flex overflow-hidden">
                        <div className="col col-8 d-flex flex-column task-wrapper-col max-h-100">
                            <div className="row task-input-row mx-0">
                                <div className="col col-11 text-start">
                                    <input type='text' placeholder='START TYPING HERE...' className='rounded' />
                                </div>
                                <div className="col col-1">
                                    <button className='rounded'>+</button>
                                </div>
                            </div>
                            <div className="row my-tasks-heading mx-0 my-4">
                                <div className="col text-start">
                                    <h2 className='h2 fw-light mb-0'>ACTIVE TASKS</h2>
                                </div>
                            </div>

                            <div className="row active-task-list max-h-100 d-flex mx-0 overflow-hidden">
                                <div className="col max-h-100  d-flex flex-column">
                                    <ul className='d-flex max-h-100   flex-column gap-2'>
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                        <ListItem />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-4"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Todo