import React from 'react'
import { useGlobalContext } from '../context'
import Product from './Product'

const ProductList = () => {
  const { allProducts } = useGlobalContext()
  // console.log(loading)

  if (allProducts.length < 1) {
    return <h2 className='section-title'>No products to display</h2>
  }
  let noProducts = allProducts.filter((item) => item.visible === false)
  if (noProducts.length === 20) {
    return <h2 className='section-title'>No products found</h2>
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Products</h2>
      <div className='products-center'>
        {allProducts.map((item) => {
          return <Product key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default ProductList
