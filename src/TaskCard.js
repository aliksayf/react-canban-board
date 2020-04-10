import React from 'react';
import { ListGroupItem, Button, Label, Row, Col, Badge } from "reactstrap";

const TaskCard = (props) => {

    const {
        task,
        idx,
        changeTaskStatus,
        openTask
    } = props;

    const leftButtonDisplays = (i) => i === 0 ? ' hidden' : '';
    const rightButtonDisplays = (i) => i === 3 ? ' hidden' : '';

    const buttonRightHandler =() => {
        changeTaskStatus(task.id, +1);
    };
    const buttonLeftHandler =() => {
        changeTaskStatus(task.id, -1);
    };


    return (
        <div>
            <ListGroupItem >
                <Row className="pointer" onClick={() => openTask({...task})}>
                    <Col xs="1">
                        {task.queue}
                    </Col>
                    <Col>
                        <Label>{task.name}</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*<Button size="sm" className={leftButtonDisplays(idx)}>◄</Button>*/}
                        <Button
                            color="secondary"
                            pill
                            size="sm"
                            onClick={buttonLeftHandler}
                            className={leftButtonDisplays(idx) + ' pointer '}>🡄</Button>
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                        {/*<Button size="sm" className={rightButtonDisplays(idx) + " float-right"}>►</Button>*/}
                        <Button
                            color="secondary"
                            pill
                            size="sm"
                            onClick={buttonRightHandler}
                            className={rightButtonDisplays(idx) + ' pointer float-right'}>🡆</Button>
                    </Col>
                </Row>
            </ListGroupItem>
        </div>
    );
};

export default TaskCard;