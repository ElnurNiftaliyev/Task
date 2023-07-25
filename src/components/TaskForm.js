import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/taskSlice';

const TaskForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '', category_id: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, category_id } = formData;
    if (title.trim() === '' || category_id.trim() === '') return;

    dispatch(createTask(formData));
    setFormData({ title: '', description: '', category_id: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task Title"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <input
        type="text"
        name="category_id"
        value={formData.category_id}
        onChange={handleChange}
        placeholder="Category ID"
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
