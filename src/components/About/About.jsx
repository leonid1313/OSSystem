import React, {useState} from 'react'
import './About.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function About ({
  ...props
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [arr, setArr] = useState(props.location.state)

  const changeName = (event) => {
    setName(event.target.value)
  }

  const changeDescription = (event) => {
    setDescription(event.target.value)
  }

  const changePrice = (event) => {
    setPrice(event.target.value)
  }

  const addLine = () => {
    setArr([...arr, {title: name, description: description, price: price, id: arr.length + 1}]);
    console.log(arr);
  }

    return (
      <div className="container-about">
        <div className="container-size">
          <div className="main">
            <div className="side-bar">
              <nav className="nav">
                <input id="nav__toggle" type="checkbox"></input>
                <label className="nav__btn" for="nav__toggle">
                  <span></span>
                </label>
                <ul className="nav__menu">
                  <li className="nav__item">
                    <Link 
                      className="link-about"
                      to={{
                        pathname: `/`,
                        state: arr
                      }}
                    >
                      Catalog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="container-form">
          <h1 className="title-add"> Add new card</h1>
          <Row>
            <Form.Label column lg={2}>
              Entet name
            </Form.Label>
            <Col>
              <Form.Control
                name="name"
                type="text"
                placeholder="Entet name"
                value={name}
                onChange={event => changeName(event)}
              />
            </Col>
          </Row>
          <Row>
            <Form.Label column lg={2}>
              Description
            </Form.Label>
            <Col>
              <Form.Control
                name="Description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={event => changeDescription(event)}
              />
            </Col>
          </Row>
          <Row>
            <Form.Label column lg={2}>
              Price
            </Form.Label>
            <Col>
              <Form.Control
                name="Price"
                type="text"
                placeholder="Price"
                value={price}
                onChange={event => changePrice(event)}
              />
            </Col>
          </Row>
          <Button id="button-add" onClick={addLine} variant="secondary">Add new card</Button>{' '}
          </div>
          </div>
        </div>
      </div>
    )
}

export default About;