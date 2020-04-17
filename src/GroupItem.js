import React, {useEffect, useState} from 'react';
import { ListGroupItem, Col, Row, Button } from 'reactstrap';
import { FiChevronUp, FiChevronDown } from "react-icons/fi";


function GroupItem(props) {

    const {
        el,
        idx,
        color,
        changeOrder,
        taskGroup
    } = props;


    return (
        <ListGroupItem color={color} >
            <Row className="p-0">
                <Col>
                    {el}
                </Col>
                <Col>
                    <div size="sm" className="m-0">
                        {(idx !== 0) ?
                            <FiChevronUp
                                className="d-block pointer"
                                onClick={() => changeOrder(idx, -1)}
                            /> : <FiChevronUp className=" d-block inactive"/>}
                    </div>
                    <div size="sm" className="m-0">
                        {(idx !== taskGroup.status.length - 1) ?
                            <FiChevronDown
                                className="d-block pointer"
                                onClick={() => changeOrder(idx, +1)}
                            /> : <FiChevronDown className=" d-block inactive"/>}
                    </div>
                </Col>
            </Row>
        </ListGroupItem>
    )
}

export default GroupItem;
