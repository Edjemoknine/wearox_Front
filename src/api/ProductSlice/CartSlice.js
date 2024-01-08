import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  user: {},
  Total: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let item = state.cart.find((item) => item.id === payload.id);

      if (item) {
        item.quantity += payload.quantity;
      } else {
        state.cart.push(payload);
      }
    },

    deleteFCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== payload;
      });
    },
    increaseAmount: (state, { payload }) => {
      let check = state.cart.findIndex((item) => item.id === payload.id);

      if (check === -1) {
        let newItem = { ...payload, quantity: 1 };
        state.cart.push(newItem);
      } else {
        state.cart.forEach((item) => {
          if (item.id === payload.id) {
            item.quantity++;
          } else {
            return null;
          }
        });
      }
    },
    decreaseAmount: (state, { payload }) => {
      state.cart.forEach((item) => {
        if (item.id === payload.id) {
          if (item.quantity > 1) {
            item.quantity--;
          }
        }
      });
    },
    clearCart: (state, { payload }) => {
      state.cart = [];
    },
    total: (state, { payload }) => {
      state.Total = state.cart.reduce((acc, item) => {
        return (acc +=
          Number(item.price.current.value) * Number(item.quantity));
      }, 0);
    },

    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export default CartSlice.reducer;
export const {
  addToCart,
  decreaseAmount,
  deleteFCart,
  increaseAmount,
  clearCart,
  total,
  login,
  logout,
} = CartSlice.actions;
