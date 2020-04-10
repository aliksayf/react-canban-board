import React from 'react';
import {Col, ListGroup, ListGroupItem } from 'reactstrap';
import {colors} from "./tasks";
import TaskCard from "./TaskCard";

function StatusColumn (props) {

    const {
        el,
        idx,
        taskList,
        openTask
    } = props;

    return (
        <Col md='3' color={colors[idx]} >
            <ListGroup>
                <ListGroupItem color={colors[idx]} >
                    {el}
                </ListGroupItem>
                 {taskList.map(task => task.status === idx + 1 &&
                     <TaskCard key={task.id} task={task} openTask={openTask} idx={idx}/>
                 )}
            </ListGroup>
        </Col>
    );
}

export default StatusColumn;
