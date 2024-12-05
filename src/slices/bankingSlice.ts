import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ATMState, User } from '../types/atm';

const initialState: ATMState = {
  currentUser: null,
  balance: 0,
  history: [],
  error: null,
};

const bankingSlice = createSlice({
  name: 'banking',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.balance = action.payload.balance;
      state.error = null;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.balance = 0;
      state.history = [];
    },
    deposit: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
      state.error = null;
    },
    withdraw: (state, action: PayloadAction<number>) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
        state.error = null;
      } else {
        state.error = "Insufficient funds";
      }
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  },
});

export const {
  loginUser,
  logoutUser,
  deposit,
  withdraw,
  setError
} = bankingSlice.actions;

export default bankingSlice.reducer;