import React, {useState} from 'react';
import './Card.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Card ({
  image,
  title,
  description,
  price,
  id,
  setAllCards,
  allCards,
  setData
}) {

  const handleRemoveItem = () => {
    let result = allCards.filter(item => item.id !== id)
    setAllCards(result);
    setData(result)
  }

    return (
      <div className="container-card">
        <h1 className="title">{title}</h1>
        <div className="container-image">
          <img className="image" src={image} />
        </div>
        <div className="cardBody">
          <p className="description-text">Description: {description}</p>
          <p>Price: {price}</p>
        </div>
        <Button onClick={handleRemoveItem} id="delete-card" variant="secondary">Deleete</Button>{' '}
      </div>
    )
}

export default Card
