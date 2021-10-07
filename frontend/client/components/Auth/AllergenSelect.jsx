import React, { component, useEffect, useState } from 'react';
import '../../bootstrap.min.css'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import AuthForm  from './AuthForm'


const AllergenSelect = () => {

    const [field, setField] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('e')
    }

  return (

            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Allergens
                    </Form.Label>
                    {/* <Col sm={10}> */}
                        <Form.Check
                        type="radio"
                        label="milk"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                    {/* </Col> */}
                </Form.Group>
            </fieldset>

  );
};

export default AllergenSelect;

// {options.map(options => (
//     <option key={option.name} value={option.value}>
//         {option.name}
//     </option>
// ))}