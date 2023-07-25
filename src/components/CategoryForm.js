import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../redux/categorySlice';

const CategoryForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (title.trim() === '') return;
  
      dispatch(createCategory({ title }));
      setTitle('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Category Title"
        />
        <button type="submit">Create Category</button>
      </form>
    );
  };
  
  export default CategoryForm;
  