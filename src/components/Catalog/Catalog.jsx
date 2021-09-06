import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Catalog.css'

import CardList from '../CardList/CardList.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import { useLocalStorage } from '../../Hooks/UseLocalStorage'

function Catalog () {
  const [data, setData] = useLocalStorage('data', []);

  const cards = async () => {
    await axios
      .get(`https://my-json-server.typicode.com/leonid1313/demo/posts`)
      .then(result => setData( result.data));
  }

  useEffect(() => {
    cards('')
  }, []);

    const [card, setCard] = useState(data)

    const deeteAllCards = () => {
      setCard(data.splice(0,data.length))
    }
    
    return (
      <div className="container-search">
        <CardList data={data} deeteAllCards={deeteAllCards} setData={setData}/>
      </div>
    )
}

export default Catalog;
