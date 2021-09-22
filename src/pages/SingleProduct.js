import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const SingleProduct = () => {
  const { allProducts, addToCart, remove } = useGlobalContext()
  let { id } = useParams()
  let Id = parseInt(id)
  const [product, setProduct] = useState([])

  const fetchSingleProduct = useCallback(() => {
    const singleProduct = allProducts.filter(
      (item) => item.id === parseInt(id)
    )[0]
    setProduct(singleProduct)
  }, [id, setProduct, allProducts])

  useEffect(() => {
    fetchSingleProduct()
  }, [id, setProduct, fetchSingleProduct])

  const { title, category, description, image, price, incart } = product

  // console.log(product)
  return (
    <section className='section product-section'>
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
      {<h2 className='section-title'>{title}</h2>}
      <div className='single-product'>
        <img src={image} alt={title} />
        <div className='single-product-info'>
          <p>
            <span className='single-product-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='single-product-data'>info :</span>
            {description}
          </p>
          <p>
            <span className='single-product-data'>price :</span>
            {price} $
          </p>
          <button onClick={() => addToCart(Id)} className='btn btn-primary'>
            {incart > 0 ? 'Add More' : 'Add to Cart'}
          </button>
          <div>
            <button
              onClick={() => remove(Id)}
              className={`${
                incart ? 'btn btn-primary' : 'btn btn-primary hide'
              }`}
            >
              Remove Product
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
