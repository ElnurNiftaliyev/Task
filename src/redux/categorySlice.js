import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: (state, action) => action.payload,
    addCategory: (state, action) => [...state, action.payload],
    updateCategoryOrder: (state, action) => {
      const { id, order } = action.payload;
      return state.map(category =>
        category.id === id ? { ...category, order } : category
      );
    },
    deleteCategory: (state, action) => state.filter(category => category.id !== action.payload),
  },
});

export const { setCategories, addCategory, updateCategoryOrder, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;
