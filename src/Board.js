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

    const toggleTaskDetail = () => setOpenTaskView(!openTaskView);
    const toggleNewTask = () => setModal(!modal);

    return (
        <Container className="themed-container" fluid="lg">
            <Button color="primary" onClick={toggleNewTask}>New task</Button>
            <Row>
                {statusBlock.map((el, idx) =>
                    <StatusColumn key={el} el={el} idx={idx} openTask={openTask} taskList={taskList}/>
                        // // <Col md='3' color={colors[idx]} key={idx+200}>
                        //     <ListGroup key={idx+300}>
                        //         <ListGroupItem color={colors[idx]} key={idx+100}>
                        //             {el}
                        //         </ListGroupItem>
                        //         {taskList.map(task => task.status === idx + 1 ?
                        //             <ListGroupItem className="pointer" color="secondary" key={task.id} onClick={()=>openTask({...task})}>{task.name}</ListGroupItem> : '')}
                        //     </ListGroup>
                        // // </Col>
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
