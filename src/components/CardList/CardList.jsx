import React, {useState, useEffect} from 'react'
import Card from '../Card/Card.jsx'
import './CardList.css'
import Information from '../Information/Information.jsx'
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function CardList ({
  data,
  deeteAllCards,
  setData
}) {
  const [allCards, setAllCards] = useState([...data])
    const onChangeStatus = (event) => {
      const { value } = event.target;
  
      switch (value) {
        case 'Sort by':
          setAllCards([...data])
          break;
  
        case 'Price':
          setAllCards([...data].sort(function(a, b) {
            return b.price - a.price;
          }))
          break;
  
        case 'Name':
          setAllCards([...data].sort(function(a, b) {
            return a.title.localeCompare(b.title);
          }))
          break;
  
        default:
          break;
      }
    }

    useEffect(() => setAllCards(data), [data])

    return (
      <>
        <div className="container-size">
          <div className="main">
            <div className="side-bar">
              <Form.Select id="list" onChange={onChangeStatus}  className="sort" aria-label="Default select example">
                <option>Sort by</option>
                <option value="Price">Price</option>
                <option value="Name">Name</option>
              </Form.Select>
              <Information items={allCards} deeteAllCards={deeteAllCards} data={data}/>
              <div>
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
                      pathname: `/about`,
                      state: allCards
                    }}
                  >
                    Add card
                  </Link>
                  </li>
                </ul>
              </nav>
            </div>
            </div>
            <div className="container">
              { (allCards.length === 0)
                ? <h1>All product has been removed from the page</h1>
                : allCards.map(item => (
                <>
                  <Card
                    key={item.id}
                    image={item.img}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    item={item}
                    id={item.id}
                    items={data}
                    setAllCards={setAllCards}
                    allCards={allCards}
                    setData={setData}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    )
}

export default CardList
