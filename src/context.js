import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from 'react'
import reducer from './reducer'
import { data } from './data'

const getList = () => {
  let list = localStorage.getItem('list')
  if (list !== 'undefined' && list !== null) {
    return JSON.parse(list)
  } else {
    return data
  }
}

// debugger
let allData = getList()

// const url = 'https://fakestoreapi.com/products'
const AppContext = React.createContext()

const initailState = {
  allProducts: allData,
  count: 0,
  total: 0,
}

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [state, dispatch] = useReducer(reducer, initailState)
  // console.log(state.allProducts)
  const addToCart = (id) => {
    dispatch({ type: 'ADD_TO_CART', payload: id })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE', payload: { id, type } })
  }

  const handleSearch = useCallback(() => {
    if (searchTerm === '') {
      state.allProducts = allData
    }
    const filterValue = state.allProducts.map((item) => {
      if (item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())) {
        return { ...item, visible: true }
      }
      return { ...item, visible: false }
    })
    state.allProducts = filterValue

    // console.log(filterValue)
  }, [searchTerm])

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' })
    localStorage.setItem('list', JSON.stringify(state.allProducts))
    allData = JSON.parse(localStorage.getItem('list'))
  }, [state.allProducts])

  useEffect(() => {
    handleSearch()
  }, [searchTerm, handleSearch])

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        remove,
        toggleAmount,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
