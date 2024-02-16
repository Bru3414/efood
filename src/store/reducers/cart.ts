import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  idItemMenu: number
  items: Cardapio,
  isOpen: boolean
}

const initialState: CartState = {
  idItemMenu: 0,
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const produto = state.items.find(item => item.id === state.idItemMenu)
      const itemMenu = action.payload.find(item => item.id === state.idItemMenu)

      if (!produto && itemMenu) {
        state.items.push(itemMenu)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    idItemMenu: (state, action: PayloadAction<number>) => {
      state.idItemMenu = action.payload
    }
  }
})

export const { add, remove, open, close, idItemMenu } = cartSlice.actions

export default cartSlice.reducer
