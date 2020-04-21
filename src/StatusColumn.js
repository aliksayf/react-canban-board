import React from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {Col, ListGroup, ListGroupItem } from 'reactstrap';
import TaskCard from "./TaskCard";

function StatusColumn (props) {

    const {
        idx,
        column,
        taskList,
        color,
        changeTaskStatus,
        changeTaskQueue,
        openTask,
        setTaskDetails,
        toggleDeleteConfirm
    } = props;

    return (
        <Col md='3' className="px-md-1 border mt-3" >
            <ListGroup>
                <ListGroupItem color={color} className="border-top">
                    <h3>{column.name}</h3>
                </ListGroupItem>
                 {/*{column.items && column.items.map((item, index) => {*/}

                 {/*       return (*/}
                 {/*           <Draggable key={item.id} draggableId={item.id} index={index}>*/}
                 {/*               {(provided, snapshot) => {*/}
                 {/*                   return (*/}
                 {/*                       <div*/}
                 {/*                           key={item.id}*/}
                 {/*                           task={item}*/}
                 {/*                           id={item.id}*/}
                 {/*                           idx={idx}*/}
                 {/*                           tasks={column.items}*/}
                 {/*                           taskIdx={index}*/}
                 {/*                           toggleDeleteConfirm={toggleDeleteConfirm}*/}
                 {/*                           setTaskDetails={setTaskDetails}*/}
                 {/*                           changeTaskStatus={changeTaskStatus}*/}
                 {/*                           changeTaskQueue={changeTaskQueue}*/}
                 {/*                           openTask={openTask}*/}
                 {/*                           ref={provided.innerRef}*/}
                 {/*                            {...provided.draggableProps}*/}
                 {/*                            {...provided.dragHandleProps}*/}
                 {/*                            style={{*/}
                 {/*                                userSelect: 'none',*/}
                 {/*                                padding: 16,*/}
                 {/*                                margin: '0 0 8px 0',*/}
                 {/*                                minHeight: '50px',*/}
                 {/*                                backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',*/}
                 {/*                                color: 'white',*/}
                 {/*                                ...provided.draggableProps.style*/}
                 {/*                            }}*/}
                 {/*                       > {item.name}</div>*/}
                 {/*                   )*/}
                 {/*               }}*/}
                 {/*           </Draggable>*/}
                 {/*       )*/}
                 {/*   })}*/}
            </ListGroup>
        </Col>
    );
}

export default StatusColumn;
