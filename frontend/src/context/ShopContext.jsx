import { createContext, useState } from "react"
import { products } from "../assets/assets"

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

  const currency = 'Rs'
  const delivery_fee = 10
  const [search, setSearch]         = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems]   = useState({})
  const [orders, setOrders]         = useState([])

  const addToCart = (itemId, size) => {
    let cartData = structuredClone(cartItems)
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1
      } else {
        cartData[itemId][size] = 1
      }
    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }
    setCartItems(cartData)
  }

  const getCartCount = () => {
    let totalCount = 0
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item]) {
            totalCount += cartItems[items][item]
          }
        } catch (err) {}
      }
    }
    return totalCount
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    orders,
    setOrders,
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider