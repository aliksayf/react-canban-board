import React, {useState} from 'react';
import {Button, Col, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import GroupItem from "./GroupItem";

function ManageGroupsModal(props) {

    const {
        taskList,
        setTaskList,
        taskGroup,
        setTaskGroup,
        newGroupModal,
        setNewGroupModal,
        manageModal,
        setManageModal
    } = props;

    const changeOrder = (idx, dif) => {
        const arr1 = [...taskGroup.status];
        const arr2 = [...taskGroup.colors];
        const arr3 = [...taskList];
        arr1.splice(idx, 1)
        arr1.splice(idx + dif, 0, taskGroup.status[idx])
        arr2.splice(idx, 1)
        arr2.splice(idx + dif, 0, taskGroup.colors[idx])
        arr3.splice(idx, 1)
        arr3.splice(idx + dif, 0, taskList[idx])
        setTaskGroup({status: arr1, colors: arr2})
        setTaskList(arr3)
        console.log(arr1, arr2, arr3, idx + dif)
    };

    const toggle = () => {
        setManageModal(!manageModal);
    };

    return (
        <div>
            <Modal isOpen={manageModal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Manage groups</ModalHeader>
                <ModalBody>
                    <ListGroup>
                        {taskGroup.status.map(( el, i )=>
                            <GroupItem
                                key={i}
                                el={el}
                                idx={i}
                                changeOrder={changeOrder}
                                taskGroup={taskGroup}
                                color={taskGroup.colors[i]}/>
                        )}
                     </ListGroup>
                </ModalBody>
                <ModalFooter>
                    {/*<Button color="primary" onClick={saveNewGroup} disabled={!submitActive}>Create</Button>{' '}*/}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ManageGroupsModal;
