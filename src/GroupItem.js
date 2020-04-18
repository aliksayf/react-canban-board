import React from 'react';
import { ListGroupItem, Col, Row, Button } from 'reactstrap';
import {FiChevronUp, FiChevronDown, FiTrash2} from "react-icons/fi";


function GroupItem(props) {

    const {
        el,
        idx,
        color,
        changeOrder,
        removeGroup,
        taskGroup
    } = props;


    return (
        <ListGroupItem color={color} >
            <Row className="p-0">
                <Col>
                    {el}
                </Col>
                <Col>
                    <div className="m-0">
                        {(idx !== 0) ?
                            <FiChevronUp
                                className="d-block pointer"
                                onClick={() => changeOrder(idx, -1)}
                            /> : <FiChevronUp className=" d-block inactive"/>}
                    </div>
                    <div className="m-0">
                        {(idx !== taskGroup.status.length - 1) ?
                            <FiChevronDown
                                className="d-block pointer"
                                onClick={() => changeOrder(idx, +1)}
                            /> : <FiChevronDown className=" d-block inactive"/>}
                    </div>
                </Col>
                <Button onClick={()=>removeGroup(idx)} pill className='float-right' size="sm"
                        color='danger'><FiTrash2/></Button>

            </Row>
        </ListGroupItem>
    )
}

export default GroupItem;
