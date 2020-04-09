import React, { useState } from 'react';
import {Col, Container, ListGroup, ListGroupItem, Row} from 'reactstrap';
import {colors, statusBlock, tasks} from './tasks';

function Board() {

    const [taskList, setTaskList] = useState(tasks);

    return (
        <Container className="themed-container" fluid="lg">
            <Row>
                {statusBlock.map((el, idx) =>
                        <Col md='3' color={colors[idx]}>
                            <ListGroup>
                                <ListGroupItem color={colors[idx]}>
                                    {el}
                                </ListGroupItem>
                                {taskList.map(task => task.status === idx + 1 ?
                                    <ListGroupItem color="secondary">{task.name}</ListGroupItem> : '')}
                            </ListGroup>
                        </Col>
                )}
            </Row>
        </Container>
    );
}

export default Board;
