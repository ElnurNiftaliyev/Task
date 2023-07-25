import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { updateTaskCategory, deleteTask } from '../redux/taskSlice';

const TaskList = ({ categories }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const categoryId = destination.droppableId;
    const taskId = draggableId;
    dispatch(updateTaskCategory(taskId, categoryId));
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(taskId));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.title}</h2>
          <Droppable droppableId={category.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ minHeight: '100px', backgroundColor: '#f3f3f3', padding: '10px', margin: '10px 0' }}
              >
                {tasks
                  .filter((task) => task.category_id === category.id)
                  .map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            backgroundColor: '#ffffff',
                            padding: '8px',
                            margin: '4px 0',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <div>
                            <strong>{task.title}</strong>
                            <p>{task.description}</p>
                          </div>
                          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      ))}
    </DragDropContext>
  );
};

export default TaskList;
