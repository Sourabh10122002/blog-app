import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
  },
  reducers: {
    setBlogs(state, action) {
      state.blogs = action.payload;
    },
    addBlog(state, action) {
      state.blogs.push(action.payload);
    },
    deleteBlog(state, action) {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    updateBlog(state, action) {
      const { id, updatedBlog } = action.payload;
      const index = state.blogs.findIndex((blog) => blog.id === id);
      if (index !== -1) {
        state.blogs[index] = { ...state.blogs[index], ...updatedBlog };
      }
    },
  },
});

export const { setBlogs, addBlog, deleteBlog, updateBlog } = blogSlice.actions;
export const selectBlogs = (state) => state.blogs.blogs;
export default blogSlice.reducer;
