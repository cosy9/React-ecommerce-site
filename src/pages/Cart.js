import React from 'react'
import { useGlobalContext } from '../context'

const Cart = () => {
  const { allProducts, total, remove, toggleAmount, count } = useGlobalContext()
  const addedProducts = allProducts.filter((item) => item.incart >= 1)
  return (
    <div className='about-section'>
      <h2 className='section-title'>Cart</h2>
      {addedProducts.map((item) => {
        const { image, title, incart, price, id } = item
        return (
          <article key={id} className='cart-item'>
            <img src={image} alt={title} />
            <div>
              <h4>{title}</h4>
              <h4 className='item-price'>${price}</h4>
              {/* remove button */}
              <button className='btn btn-primary' onClick={() => remove(id)}>
                remove
              </button>
            </div>
            <div>
              {/* increase amount */}
              <button
                className='amount-btn'
                onClick={() => toggleAmount(id, 'inc')}
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                  <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                </svg>
              </button>
              {/* amount */}
              <p className='amount'>{incart}</p>
              {/* decrease amount */}
              <button
                className='amount-btn'
                onClick={() => toggleAmount(id, 'dec')}
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </button>
            </div>
          </article>
        )
      })}
      {count > 0 ? (
        <h2 className='section-title'>Total $ {total}</h2>
      ) : (
        <h2 className='section-title'>Your Cart is Empty</h2>
      )}
    </div>
  )
}
export default Cart
