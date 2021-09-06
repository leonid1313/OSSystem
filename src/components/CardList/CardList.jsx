import React, {useState, useEffect} from 'react'
import Card from '../Card/Card.jsx'
import './CardList.css'
import Information from '../Information/Information.jsx'
import Form from 'react-bootstrap/Form';

function CardList ({
  items,
  data,
}) {
  const [allCards, setAllCards] = useState([...items])
    const onChangeStatus = (event) => {
      const { value } = event.target;
  
      switch (value) {
        case 'Sort by':
          setAllCards([...items])
          break;
  
        case 'Price':
          setAllCards([...items].sort(function(a, b) {
            return b.price - a.price;
          }))
          break;
  
        case 'Name':
          setAllCards([...items].sort(function(a, b) {
            return a.title.localeCompare(b.title);
          }))
          break;
  
        default:
          break;
      }
    }

    const deeteAllCards = () => {
      setAllCards(items.splice(0,items.length))
    }

    useEffect(() => setAllCards(items), [items])

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
              <Information items={allCards} deeteAllCards={deeteAllCards}/>
            </div>
            <div className="container">
              {allCards.map(item => (
                <>
                  <Card
                    key={item.id}
                    image={item.img}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    item={item}
                    id={item.id}
                    items={items}
                    setAllCards={setAllCards}
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
