import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      return { postId, comments: response.data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const loadCommentsFromLocalStorage = () => {
  const savedComments = localStorage.getItem('localComments');
  return savedComments ? JSON.parse(savedComments) : {};
};

const saveCommentsToLocalStorage = (comments) => {
  localStorage.setItem('localComments', JSON.stringify(comments));
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    byPostId: {},
    localComments: loadCommentsFromLocalStorage(),
    status: 'idle',
    error: null,
  },
  reducers: {
    addLocalComment: (state, action) => {
      const { postId, comment } = action.payload;
      if (!state.localComments[postId]) {
        state.localComments[postId] = [];
      }
      state.localComments[postId].push(comment);
      saveCommentsToLocalStorage(state.localComments);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { postId, comments } = action.payload;
        state.byPostId[postId] = comments;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addLocalComment } = commentsSlice.actions;
export default commentsSlice.reducer;