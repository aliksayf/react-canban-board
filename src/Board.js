import React, { useState } from 'react';
import {Col, Container, ListGroup, ListGroupItem, Row, Button } from 'reactstrap';
import {colors, statusBlock, tasks} from './tasks';
import NewTask from "./NewTask";
import TaskDetailsView from "./TaskDetailsView";
import StatusColumn from "./StatusColumn";




function Board() {

    const [taskList, setTaskList] = useState( [...tasks]);
    const [modal, setModal] = useState(false);
    const [openTaskView, setOpenTaskView] = useState(false);
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

    const changeTaskStatus = (id, diff) => {
        const changedTask = [...taskList]
        changedTask.map(el => el.id === id ? (el.status += diff) : '');

        console.log(changedTask);
        setTaskList([...changedTask] )
    };

    const toggleTaskDetail = () => setOpenTaskView(!openTaskView);
    const toggleNewTask = () => setModal(!modal);

    return (
        <Container className="themed-container" fluid="lg">
            <Button color="primary" onClick={toggleNewTask}>New task</Button>
            <Row>
                {statusBlock.map((el, idx) =>
                    <StatusColumn key={el}
                                  el={el}
                                  idx={idx}
                                  changeTaskStatus={changeTaskStatus}
                                  openTask={openTask}
                                  taskList={taskList} />
                )}
            </Row>

            <NewTask addNewTask={addNewTask}
                     toggle={toggleNewTask}
                     modal={modal}/>
            <TaskDetailsView addNewTask={addNewTask}
                     toggle={toggleTaskDetail}
                     taskDetails={taskDetails}
                     openTaskView={openTaskView}/>
        </Container>
    );
}

export default Board;
