import React from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {FiAlertTriangle, FiChevronsLeft, FiChevronsRight, FiTrash2, FiChevronUp, FiChevronDown} from "react-icons/fi";
import {Button, Col, Label, ListGroupItem, Row} from "reactstrap";

const TaskCard = (props) => {

    const {
        task,
        idx,
        taskIdx,
        changeTaskStatus,
        changeTaskQueue,
        openTask,
        tasks,
        toggleDeleteConfirm,
        setTaskDetails
    } = props;

    const priorityColors = {
        Low: "light",
        Mid: "warning",
        High: "danger"
    }

    console.log()

    const leftButtonDisplays = (i) => i === 0 ? ' hidden' : '';
    const rightButtonDisplays = (i) => i === 1 ? ' hidden' : '';

    const buttonRightHandler = () => {
        changeTaskStatus( idx, taskIdx, +1);
    };

    const buttonLeftHandler = () => {
        changeTaskStatus(idx, taskIdx, -1);
    };

    const buttonUptHandler = () => {
        changeTaskQueue( idx, taskIdx, -1);
    };

    const buttonDownHandler = () => {
        changeTaskQueue(idx, taskIdx, +1);
    };

    const onTaskClickHandler = () => {
        openTask(task);
    };

    const deleteHandler = () => {
        setTaskDetails(task);
        toggleDeleteConfirm();
    };


    return (
        <div>
            <ListGroupItem className="bg-light">
                <Row
                    // className="pointer" onClick={onTaskClickHandler}
                    >
                    <Col xs="2">
                        {/*<button*/}
                        {/*    className="border-0"*/}
                        {/*    color="secondary"*/}
                        {/*    onClick={buttonUptHandler}>*/}
                        {/*    <FiChevronUp/>*/}
                        {/*</button>*/}
                        {/*<button*/}
                        {/*    className="border-0"*/}
                        {/*    color="secondary"*/}
                        {/*    onClick={buttonDownHandler}>*/}
                        {/*    <FiChevronDown/>*/}
                        {/*</button>*/}
                    </Col>
                    <Col lg="10">
                        <Label className="pointer overflow-name text-left" onClick={onTaskClickHandler}>
                            <strong >{task.name}</strong>
                        </Label>
                        <p>
                        <FiAlertTriangle className={priorityColors[task.priority] + " text-xs-right"}/>
                            <i> details...</i></p>
                    </Col>
                </Row>
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        <Button*/}
                {/*            color="secondary"*/}
                {/*            outline*/}
                {/*            size="sm"*/}
                {/*            onClick={buttonLeftHandler}*/}
                {/*            className={leftButtonDisplays(idx) + ' pointer float-left'}><FiChevronsLeft/></Button>*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <Col>*/}
                {/*            <Button onClick={deleteHandler} pill className='float-right' size="sm"*/}
                {/*                    color='danger'><FiTrash2/></Button>*/}
                {/*        </Col>*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <Button*/}
                {/*            color="secondary"*/}
                {/*            outline*/}
                {/*            size="sm"*/}
                {/*            onClick={buttonRightHandler}*/}
                {/*            className={rightButtonDisplays(idx) + ' pointer float-right'}><FiChevronsRight/></Button>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </ListGroupItem>
        </div>
    );
};

export default TaskCard;