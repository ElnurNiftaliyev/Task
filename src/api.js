import axios from 'axios';

const API_BASE_URL = 'http://134.209.207.128/api'; 

export const fetchTasks = () => axios.get(`${API_BASE_URL}/tasks`);
export const createTask = (taskData) => axios.post(`${API_BASE_URL}/tasks`, taskData);
export const updateTaskCategory = (taskId, categoryId) => axios.patch(`${API_BASE_URL}/tasks/${taskId}`, { categoryId });
export const deleteTaskById = (taskId) => axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
export const fetchCategories = () => axios.get(`${API_BASE_URL}/categories`);
export const createCategory = (categoryData) => axios.post(`${API_BASE_URL}/categories`, categoryData);
export const updateCategoryOrder = (categoryId, order) => axios.patch(`${API_BASE_URL}/categories/${categoryId}`, { order });
export const deleteCategoryById = (categoryId) => axios.delete(`${API_BASE_URL}/categories/${categoryId}`);
