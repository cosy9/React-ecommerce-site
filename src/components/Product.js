import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Product = ({ category, id, image, incart, price, title, visible }) => {
  const { addToCart, remove } = useGlobalContext()
  return (
    <article className={`${visible ? 'product' : 'product hide'}`}>
      <h4 className='category'>{category}</h4>
      <div className='img-container'>
        <img src={image} alt={title} />
      </div>
      <div className='product-footer'>
        <h3>{title}</h3>
        <p className='price'>Price {price} $</p>
        <Link to={`/product/${id}`} className='btn btn-primary btn-details'>
          More Details
        </Link>
        <div>
          <button onClick={() => addToCart(id)} className='btn btn-primary'>
            {incart > 0 ? 'Add More' : 'Add to Cart'}
          </button>
        </div>
        <div>
          <button
            onClick={() => remove(id)}
            className={`${incart ? 'btn btn-primary' : 'btn btn-primary hide'}`}
          >
            Remove Product
          </button>
        </div>
      </div>
    </article>
  )
}

export default Product
