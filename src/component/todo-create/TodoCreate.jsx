import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";

const TodoCreate = (props) => {
    const [newInputTodos, setNewInputTodos] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTodos = {
            id: Math.floor(Math.random() * 100) + 1,
            title: newInputTodos,
        };

        props.onCreateTodos(newTodos);

        setNewInputTodos("");
    };

    const handleInputTodos = (event) => {
        setNewInputTodos(event.target.value);
    };

    return (
        <div>
            <Form className="mt-4" onSubmit={handleSubmit}>
                <Row>
                    <Col xs="4">
                        <FormGroup>
                            <Input
                                type="text"
                                value={newInputTodos}
                                onChange={handleInputTodos}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs="3">
                        <Button className="btn btn-success" type="submit">
                            Add todo list
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default TodoCreate;
