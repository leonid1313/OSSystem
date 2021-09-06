import React, { useState } from "react";
import './Information.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function Information ({
  items,
  deeteAllCards
}) {



  let price = items.map(item => +item.price);

  let sum = price.reduce(function(total, value) {
    return total + value;
  }, 0);

  let average = (sum / items.length).toFixed(2);

  return (
    <>
      <div>
        <ListGroup className="nav">
          <ListGroup.Item>Total number of items: {items.length}</ListGroup.Item>
          <ListGroup.Item>The sum of the prices of all goods: {sum}</ListGroup.Item>
          <ListGroup.Item>Average price: {average}</ListGroup.Item>
        </ListGroup>
        <Button className="delete-all" onClick={deeteAllCards} variant="secondary">Delete all cards</Button>{' '}
      </div>
    </>
  )
}

export default Information;