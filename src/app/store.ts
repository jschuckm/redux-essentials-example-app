import postsSlice from '@/features/posts/postsSlice'
import { configureStore } from '@reduxjs/toolkit'
import type { Action, ThunkAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}


export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    posts: postsSlice
  }
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>
// Export a reusable type for handwritten thunks
export type AppThunk = ThunkAction<void, RootState, unknown, Action>