import React from 'react';
import {Col, ListGroup, ListGroupItem } from 'reactstrap';
import {colors} from "./tasks";
import TaskCard from "./TaskCard";

function StatusColumn (props) {

    const {
        el,
        idx,
        taskList,
        changeTaskStatus,
        openTask
    } = props;

    return (
        <Col md='3' color={colors[idx]} className="px-md-1">
            <ListGroup>
                <ListGroupItem color={colors[idx]} >
                    {el}
                </ListGroupItem>
                 {taskList.map(task => task.status === idx + 1 &&
                     <TaskCard key={task.id}
                               task={task}
                               idx={idx}
                               changeTaskStatus={changeTaskStatus}
                               openTask={openTask} />
                 )}
            </ListGroup>
        </Col>
    );
}

export default StatusColumn;
