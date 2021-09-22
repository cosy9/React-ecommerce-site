import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import pages
import Home from './pages/Home'
import Error from './pages/Error'
import SingleProduct from './pages/SingleProduct'
import About from './pages/About'
import Cart from './pages/Cart'

// import components

import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/product/:id'>
          <SingleProduct />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
