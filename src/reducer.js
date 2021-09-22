const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let productToAdd = state.allProducts.map((item) => {
      if (item.id === action.payload) {
        return { ...item, incart: item.incart + 1 }
      }
      return item
    })
    // console.log(productToAdd)
    return { ...state, allProducts: productToAdd }
  }

  if (action.type === 'GET_TOTAL') {
    let { total, count } = state.allProducts.reduce(
      (cartTotal, cartItem) => {
        const { price, incart } = cartItem
        const totalCost = price * incart
        cartTotal.total += totalCost
        cartTotal.count += incart
        return cartTotal
      },
      {
        total: 0,
        count: 0,
      }
    )

    total = parseFloat(total.toFixed(2))
    return { ...state, count, total }
  }

  if (action.type === 'REMOVE') {
    const newProducts = state.allProducts.map((item) => {
      if (item.id === action.payload) {
        return { ...item, incart: 0 }
      }
      return item
    })
    return { ...state, allProducts: newProducts }
  }

  if (action.type === 'TOGGLE') {
    let newProducts = state.allProducts.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.type === 'inc') {
          return { ...item, incart: item.incart + 1 }
        }
        if (action.payload.type === 'dec') {
          if (item.incart > 1) {
            return { ...item, incart: item.incart - 1 }
          }
        }
      }
      return item
    })

    return { ...state, allProducts: newProducts }
  }

  return { ...state }
}

export default reducer
