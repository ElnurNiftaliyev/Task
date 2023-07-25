import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload,
    addTask: (state, action) => [...state, action.payload],
    updateTask: (state, action) => state.map(task => (task.id === action.payload.id ? action.payload : task)),
    deleteTask: (state, action) => state.filter(task => task.id !== action.payload),
  },
});

export const { setTasks, addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
