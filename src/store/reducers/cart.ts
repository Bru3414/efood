import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  idItemMenu: number
  items: Cardapio
  isOpen: boolean
  tela: number
}

const initialState: CartState = {
  idItemMenu: 0,
  items: [],
  isOpen: false,
  tela: 1
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
      state.tela = 1
    },
    trocaTela: (state, action:PayloadAction<number>) => {
      state.tela = action.payload
    },
    idItemMenu: (state, action: PayloadAction<number>) => {
      state.idItemMenu = action.payload
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, trocaTela, idItemMenu, clear } = cartSlice.actions

export default cartSlice.reducer
