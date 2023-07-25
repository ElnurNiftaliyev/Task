import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import categoryReducer from './categorySlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    categories: categoryReducer,
  },
});

export default store;
