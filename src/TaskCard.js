import React from 'react';
import {ListGroupItem, Button, Label, Row, Col, Badge} from "reactstrap";

const TaskCard = (props) => {

    const {
        task,
        idx,
        changeTaskStatus,
        openTask,
        removeTask
    } = props;

    const priorityColors = {
        Low: "light",
        Mid: "warning",
        High: "danger"
    }

    const leftButtonDisplays = (i) => i === 0 ? ' hidden' : '';
    const rightButtonDisplays = (i) => i === 3 ? ' hidden' : '';

    const buttonRightHandler = () => {
        changeTaskStatus(task.id, +1);
    };

    const buttonLeftHandler = () => {
        changeTaskStatus(task.id, -1);
    };

    const onTaskClickHandler = () => {
        openTask(task);
    };

    const deleteHandler = () => {
        removeTask(task.id);
    };


    return (
        <div>
            <ListGroupItem>
                <Row>
                    <Col xs="1">
                        {task.queue}
                    </Col>
                    <Col>
                        <Label className="pointer" onClick={onTaskClickHandler}>{task.name}</Label>
                    </Col>
                    <Button onClick={deleteHandler} color='danger'>x</Button>
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
                    <Col className="pointer" onClick={onTaskClickHandler}>
                        <Badge color={priorityColors[task.priority]}>{task.priority} priority</Badge>
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