import React, {useState} from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import { tasks, status, colors } from './tasks';
import NewTask from "./NewTask";
import TaskDetailsView from "./TaskDetailsView";
import StatusColumn from "./StatusColumn";
import DeleteConfirmModal from "./DeleteConfirmModal";
import NewGroupModal from "./NewGroupModal";
import ManageGroupsModal from "./ManageGroupsModal";


function Board() {

    const emptyFields = {name: '', description: ''};
    const [newTaskValues, setNewTaskValues] = useState(emptyFields);
    const [taskList, setTaskList] = useState([...tasks]);
    const [modal, setModal] = useState(false);
    const [newGroupModal, setNewGroupModal] = useState(false);
    const [openTaskView, setOpenTaskView] = useState(false);
    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const [taskDetails, setTaskDetails] = useState({});
    const [taskGroup, setTaskGroup] = useState({status: [...status], colors: [...colors]});
    const [manageModal, setManageModal] = useState(false);


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

    const changeTaskQueue = (idx, taskIdx, diff) => {
        const arr = [...taskList];
        const movedTask = arr[idx].splice(taskIdx, 1);
        arr[idx].splice(taskIdx + diff, 0, movedTask[0]);
        setTaskList(arr)
    };

    const changeTaskValues = (obj) => {
        const changedTask = [...taskList].map(task => task.map(el => el.id === taskDetails.id ? {...obj} : el));
        setTaskList([...changedTask]);
    };

    const removeTask = () => {
        const changedTaskList = [...taskList].map(task => task.filter(el => el.id !== taskDetails.id));
        setTaskList(changedTaskList);
    };

    const toggleTaskDetail = () => setOpenTaskView(!openTaskView);
    const toggleManageGroup = () => setManageModal(!manageModal);
    const toggleNewGroupModal = () => setNewGroupModal(true);
    const toggleDeleteConfirm = () => setOpenDeleteConfirm(!openDeleteConfirm);
    const toggleNewTask = () => setModal(!modal);


    return (
        <Container className="themed-container" fluid="lg">
            <Row>
                <Col md='4' className=" px-md-1 ">
                    <Button color="primary" onClick={toggleNewTask} className="float-left mr-1">New task</Button>
                    <Button color="primary" onClick={toggleNewGroupModal} className="float-left mr-1">New group</Button>
                    <Button color="primary" onClick={toggleManageGroup} className="float-left mr-1">Manage groups</Button>
                </Col>
                <Col md='2' className=" px-md-1">
                </Col>
                <Col md='6' className=" px-md-1">
                    <a href='https://github.com/aliksayf/react-kanban-board/issues' target="_blank">
                        <Button color="secondary" outline className="float-right">Report issue</Button>
                    </a>
                </Col>
            </Row>
            <Row>
                <hr/>
            </Row>
            <Row>
                {taskGroup.status.map((el, idx) =>
                    <StatusColumn key={idx}
                                  idx={idx}
                                  name={el}
                                  changeTaskStatus={changeTaskStatus}
                                  changeTaskQueue={changeTaskQueue}
                                  removeTask={removeTask}
                                  setTaskDetails={setTaskDetails}
                                  openTask={openTask}
                                  toggleDeleteConfirm={toggleDeleteConfirm}
                                  taskList={taskList[idx]}/>
                )}
            </Row>

            <NewTask addNewTask={addNewTask}
                     toggleNewTask={toggleNewTask}
                     newTaskValues={newTaskValues}
                     setNewTaskValues={setNewTaskValues}
                     modal={modal}/>

            <NewGroupModal
                taskGroup={taskGroup}
                setTaskGroup={setTaskGroup}
                taskList={taskList}
                setTaskList={setTaskList}
                newGroupModal={newGroupModal}
                setNewGroupModal={setNewGroupModal}/>

            <TaskDetailsView addNewTask={addNewTask}
                             toggle={toggleTaskDetail}
                             taskDetails={taskDetails}
                             setTaskDetails={setTaskDetails}
                             toggleDeleteConfirm={toggleDeleteConfirm}
                             removeTask={removeTask}
                             changeTaskValues={changeTaskValues}
                             openTaskView={openTaskView}/>

            <ManageGroupsModal taskGroup={taskGroup}
                               setTaskGroup={setTaskGroup}
                               taskList={taskList}
                               setTaskList={setTaskList}
                               manageModal={manageModal}
                               setManageModal={setManageModal}
            />

            <DeleteConfirmModal toggleDeleteConfirm={toggleDeleteConfirm}
                                openDeleteConfirm={openDeleteConfirm}
                                removeTask={removeTask}/>
        </Container>
    );
}

export default Board;
