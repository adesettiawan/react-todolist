import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import "./TodoList.css";

const TodoList = (props) => {
    return (
        <div className="mt-4">
            <Row>
                <Col xs="6">
                    {props.dataTodos.map((todo) => {
                        return (
                            <Card className="mb-3" key={todo.id}>
                                <CardBody className="card-style">
                                    <CardTitle
                                        tag="span"
                                        className="text-style"
                                    >
                                        {todo.title}
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Col>
            </Row>
        </div>
    );
};

export default TodoList;
