import { configureStore } from '@reduxjs/toolkit'
import catsReducer from '../slices/catsSlice'
import bankingSlice from '../slices/bankingSlice'

export const store = configureStore({
    reducer: {
        banking: bankingSlice,
        cats: catsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch