import React, { useState } from 'react';
import {Col, Container, ListGroup, ListGroupItem, Row, Button } from 'reactstrap';
import {colors, statusBlock, tasks} from './tasks';
import NewTask from "./NewTask";

function Board() {

    const [taskList, setTaskList] = useState(tasks);
    const [modal, setModal] = useState(false);



    const addNewTask = (obj) => {
        const arr = [...taskList];
        arr.push({...obj});
        setTaskList([...arr]);
        toggle();
    };


    const toggle = () => setModal(!modal);

    return (
        <Container className="themed-container" fluid="lg">
            <Button color="primary" onClick={toggle}>New task</Button>
            <NewTask addNewTask={addNewTask}
                     toggle={toggle}
                     modal={modal}/>
            <Row>
                {statusBlock.map((el, idx) =>
                        <Col md='3' color={colors[idx]}>
                            <ListGroup>
                                <ListGroupItem color={colors[idx]} key={idx}>
                                    {el}
                                </ListGroupItem>
                                {taskList.map(task => task.status === idx + 1 ?
                                    <ListGroupItem color="secondary" key={task.id}>{task.name}</ListGroupItem> : '')}
                            </ListGroup>
                        </Col>
                )}
            </Row>
        </Container>
    );
}

export default Board;
