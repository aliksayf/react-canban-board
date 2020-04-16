import React from 'react';
import {Col, ListGroup, ListGroupItem } from 'reactstrap';
import {colors, status} from "./tasks";
import TaskCard from "./TaskCard";

function StatusColumn (props) {

    const {
        idx,
        taskList,
        changeTaskStatus,
        changeTaskQueue,
        openTask,
        setTaskDetails,
        toggleDeleteConfirm
    } = props;

    return (
        <Col md='3' color={colors[idx]} className="px-md-1">
            <ListGroup>
                <ListGroupItem color={colors[idx]}>
                    <h5>{status[idx]}</h5>
                </ListGroupItem>
                 {taskList.map((task, taskIdx) =>
                     <TaskCard key={task.id}
                               task={task}
                               id={task.id}
                               idx={idx}
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
