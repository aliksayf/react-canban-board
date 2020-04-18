import React from 'react';
import {Col, ListGroup, ListGroupItem } from 'reactstrap';
import TaskCard from "./TaskCard";

function StatusColumn (props) {

    const {
        idx,
        name,
        taskList,
        taskGroup,
        changeTaskStatus,
        changeTaskQueue,
        openTask,
        setTaskDetails,
        toggleDeleteConfirm
    } = props;

    return (
        <Col md='3' className="px-md-1 border mt-3" >
            <ListGroup>
                <ListGroupItem color={taskGroup.colors[idx]} className="border-top">
                    <h5>{name}</h5>
                </ListGroupItem>
                 {taskList && taskList.map((task, taskIdx) =>
                     <TaskCard key={task.id}
                               task={task}
                               id={task.id}
                               idx={idx}
                               taskGroup={taskGroup}
                               taskIdx={taskIdx}
                               toggleDeleteConfirm={toggleDeleteConfirm}
                               setTaskDetails={setTaskDetails}
                               changeTaskStatus={changeTaskStatus}
                               changeTaskQueue={changeTaskQueue}
                               openTask={openTask} />
                 )}
            </ListGroup>
        </Col>
    );
}

export default StatusColumn;
