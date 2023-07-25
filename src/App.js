import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, fetchCategories } from './api';
import { setTasks } from './redux/taskSlice';
import { setCategories } from './redux/categorySlice';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import { useEffect } from 'react';

const App = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksResponse = await fetchTasks();
        const categoriesResponse = await fetchCategories();

        dispatch(setTasks(tasksResponse.data));
        dispatch(setCategories(categoriesResponse.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Router>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <TaskForm />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <CategoryForm />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Switch>
            <Route exact path="/">
              <CategoryList />
            </Route>
            <Route path="/tasks">
              <TaskList categories={categories} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
