import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    pizzas: [],
    pricePizza: 0,
  },
  reducers: {
    addPizzas: (state, actions) => {
      const findPizza = state.pizzas.find(
        (value) => value.id === actions.payload.id
      );
      if (findPizza) {
        findPizza.count++;
      } else {
        state.pizzas.push({
          ...actions.payload,
          count: 1,
        });
      }
      state.pricePizza = state.pizzas.reduce(
        (sum, current) => sum + current.price * current.count,
        0
      );
    },
    minusPizza: (state, actions) => {
      const findPizza = state.pizzas.find(
        (value) => value.id === actions.payload
      );
      if (findPizza) {
        findPizza.count--;
      }
      state.pricePizza = state.pizzas.reduce(
        (sum, current) => sum + current.price * current.count,
        0
      );
    },
    removePizzas: (state, actions) => {
      state.pizzas = state.pizzas.filter(
        (value) => value.id !== actions.payload
      );
      state.pricePizza = state.pizzas.reduce(
        (sum, current) => sum + current.price * current.count,
        0
      );
    },
    clearPizzas: (state) => {
      state.pizzas = [];
      state.pricePizza = 0;
    },
  },
});

export const { addPizzas, removePizzas, clearPizzas, minusPizza } =
  cartSlice.actions;
export default cartSlice.reducer;
