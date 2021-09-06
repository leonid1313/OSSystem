import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Catalog.css'

import CardList from '../../components/CardList/CardList.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import { useLocalStorage } from '../../Hooks/UseLocalStorage'

function Catalog () {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [data, setData] = useLocalStorage('data', []);

  const searchRepos = async () => {
    await axios
      .get(`https://my-json-server.typicode.com/leonid1313/demo/posts`)
      .then(result => setData( result.data));
  }

  useEffect(() => {
    searchRepos('')
  }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
      <div className="container-search">
        <CardList items={currentPosts} data={data}/>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </div>
    )
}

export default Catalog;
