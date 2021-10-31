import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetch } from '@/api/post'

import { RootState } from './store'

export const fetchPost = createAsyncThunk(
  'post/fetch',
  async (payload, thunkAPI) => {
    try {
      const response = await fetch()
      const { data } = response
      if (response.status === 200) {
        return data
      }
      return thunkAPI.rejectWithValue(data)
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
    }
  },
)

interface postsState {
  posts: []
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string
}
const initialState: postsState = {
  posts: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false
      state.isSuccess = false
      state.isFetching = false

      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, { payload }) => {
      state.isFetching = false
      state.isSuccess = true
      state.posts = payload
    })
    builder.addCase(fetchPost.pending, (state) => {
      state.isFetching = true
    })
    builder.addCase(fetchPost.rejected, (state, { payload }) => {
      state.isFetching = false
      state.isError = true
      state.errorMessage = payload as string
    })
  },
})
export const { clearState } = postSlice.actions
export const postsSelector = (state: RootState) => state.posts
export default postSlice.reducer
