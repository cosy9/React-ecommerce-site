import React from 'react'
import ProductList from '../components/ProductList'
import SearchForm from '../components/SearchForm'
const Home = () => {
  return (
    <main>
      <SearchForm />
      <ProductList />
    </main>
  )
}

export default Home
