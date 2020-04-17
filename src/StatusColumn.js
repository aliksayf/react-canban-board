import React from 'react';
import {Col, ListGroup, ListGroupItem } from 'reactstrap';
import {colors} from "./tasks";
import TaskCard from "./TaskCard";

function StatusColumn (props) {

    const {
        idx,
        name,
        taskList,
        changeTaskStatus,
        changeTaskQueue,
        openTask,
        setTaskDetails,
        toggleDeleteConfirm
    } = props;

    return (
        <Col md='3' className="px-md-1 border">
            <ListGroup>
                <ListGroupItem color={colors[idx]} className="border-top">
                    <h5>{name}</h5>
                </ListGroupItem>
                 {taskList && taskList.map((task, taskIdx) =>
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
