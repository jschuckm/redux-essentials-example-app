import { RootState } from '@/app/store'
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

// Define a TS type for the data we'll be using
export interface Post {
  id: string
  title: string
  content: string
}

// Create an initial state value for the reducer, with that type
const initialState: Post[] = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

// Create the slice and pass in the initial state
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state: Post[], action: PayloadAction<Post>) => {
        state.push(action.payload)
      },
      prepare: (title: string, content: string) => {
        return {
          payload: {id: nanoid(), title, content}
        }
      }
    }, 
    postUpdated: (state: Post[], action: PayloadAction<Post>) => {
      const postIndex = state.findIndex((post) => {
        if(action.payload.id === post.id) return true
      })
      if(postIndex != -1)state[postIndex] = action.payload
    }
  },
  // extraReducers: (builder) => {
  //   // Pass the action creator to `builder.addCase()`
  //   builder.addCase(userLoggedOut, (state) => {
  //     // Clear out the list of posts whenever the user logs out
  //     return []
  //   })
  // },
})

// const exampleThunkFunction = (): AppThunk => {
// return (
//   dispatch: AppDispatch,
//   getState: () => RootState
// ) => {
//   const stateBefore = getState()
//   console.log(`Counter before: ${stateBefore.counter}`)
//   dispatch(increment())
//   const stateAfter = getState()
//   console.log(`Counter after: ${stateAfter.counter}`)
// }
// }

// store.dispatch(exampleThunkFunction)

export const selectAllPosts = (state: RootState) => state.posts

export const selectPostById = (state: RootState, postId: string) =>
  state.posts.find(post => post.id === postId)

export const { postAdded, postUpdated } = postsSlice.actions
 
// Export the generated reducer function
export default postsSlice.reducer