import { configureStore } from '@reduxjs/toolkit'
import personnageReducer from '../features/personnage/personnageSlice.ts'

export const store = configureStore({
  reducer: {
    personnage: personnageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
