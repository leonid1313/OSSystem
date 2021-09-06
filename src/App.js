import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'

import Catalog from './components/Catalog/Catalog.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Loader from './components/Loader/Loader.jsx'
import Footer from './components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



function App () {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    setTimeout(() => {
      setLoader(true)
    }, 1000)
  }, []);

  return (
    <>
      {loader 
        ? (
          <>
            <Router basename="/OSSystem">
              <Header />
              <Route path='/' exact component={Catalog} />
              <Route path="/about" exact component={About}/>
              <Footer/>
            </Router>
          </>
          )
        :  <Loader/>
      }
    </>
  )
}

export default App;
