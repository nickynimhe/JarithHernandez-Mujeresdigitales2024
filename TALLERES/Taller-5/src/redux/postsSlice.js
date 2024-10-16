import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { validatePost, isPostValid } from '../utils/validationUtils';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (page = 1, { rejectWithValue }) => {
    try {
      const limit = 15;
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (post, { rejectWithValue }) => {
    const errors = validatePost(post);
    if (Object.keys(errors).length > 0) {
      return rejectWithValue(errors);
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    page: 1,
  },
  reducers: {
    toggleLike: (state, action) => {
      const post = state.items.find(post => post.id === action.payload);
      if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
      }
    },
    toggleShare: (state, action) => {
      const post = state.items.find(post => post.id === action.payload);
      if (post) {
        post.shared = !post.shared;
        post.shares += post.shared ? 1 : -1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...state.items, ...action.payload.filter(isPostValid).map(post => ({
          ...post,
          likes: Math.floor(Math.random() * 1000),
          shares: Math.floor(Math.random() * 500),
          liked: false,
          shared: false,
        }))];
        state.page += 1;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.items.unshift({
          ...action.payload,
          likes: 0,
          shares: 0,
          liked: false,
          shared: false,
        });
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { toggleLike, toggleShare } = postsSlice.actions;
export default postsSlice.reducer;