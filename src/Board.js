import React, {useState} from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import {statusBlock, tasks} from './tasks';
import NewTask from "./NewTask";
import TaskDetailsView from "./TaskDetailsView";
import StatusColumn from "./StatusColumn";
import DeleteConfirmModal from "./DeleteConfirmModal";


function Board() {

    const emptyFields = {name: '', description: ''}
    const [newTaskValues, setNewTaskValues] = useState(emptyFields);
    const [taskList, setTaskList] = useState([...tasks]);
    const [modal, setModal] = useState(false);
    const [openTaskView, setOpenTaskView] = useState(false);
    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const [taskDetails, setTaskDetails] = useState({});

    const addNewTask = (obj) => {
        const arr = [...taskList];
        arr.push(obj);
        setTaskList([...arr]);
        toggleNewTask();
    };

    const openTask = (obj) => {
        setTaskDetails({...obj})
        toggleTaskDetail();
    };

    const changeTaskStatus = (idx, taskIdx, diff) => {
        const arr = [...taskList];
        const movedTask = arr[idx].splice(taskIdx, 1);
        arr[idx + diff].push(movedTask[0]);
        setTaskList(arr)
    };

    const changeTaskValues = (obj) => {
        let index = taskList.findIndex(x => x.id === obj.id);
        const changedTask = [...taskList]
        changedTask.splice(index, 1, obj);
        setTaskList([...changedTask]);
    };

    const removeTask = () => {
        const changedTaskList = [...taskList].filter(el => el.id !== taskDetails.id);
        setTaskList(changedTaskList);
    };

    const toggleTaskDetail = () => setOpenTaskView(!openTaskView);
    const toggleDeleteConfirm = () => setOpenDeleteConfirm(!openDeleteConfirm);
    const toggleNewTask = () => setModal(!modal);


    return (
        <Container className="themed-container" fluid="lg">
            <Row>
                <Col md='3' className=" px-md-1">
                    <Button color="primary" onClick={toggleNewTask} className="float-left">New task</Button>
                </Col>
            </Row>
            <Row>
                <hr/>
            </Row>
            <Row>
                {taskList.map((el, idx) =>
                    <StatusColumn key={idx}
                                  idx={idx}
                                  changeTaskStatus={changeTaskStatus}
                                  removeTask={removeTask}
                                  setTaskDetails={setTaskDetails}
                                  openTask={openTask}
                                  toggleDeleteConfirm={toggleDeleteConfirm}
                                  taskList={el}/>
                )}
            </Row>

            <NewTask addNewTask={addNewTask}
                     toggleNewTask={toggleNewTask}
                     newTaskValues={newTaskValues}
                     setNewTaskValues={setNewTaskValues}
                     modal={modal}/>
            <TaskDetailsView addNewTask={addNewTask}
                             toggle={toggleTaskDetail}
                             taskDetails={taskDetails}
                             setTaskDetails={setTaskDetails}
                             toggleDeleteConfirm={toggleDeleteConfirm}
                             removeTask={removeTask}
                             changeTaskValues={changeTaskValues}
                             openTaskView={openTaskView}/>

            <DeleteConfirmModal toggleDeleteConfirm={toggleDeleteConfirm}
                                openDeleteConfirm={openDeleteConfirm}
                                removeTask={removeTask}/>
        </Container>
    );
}

export default Board;
