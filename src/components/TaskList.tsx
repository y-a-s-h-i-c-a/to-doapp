
"use client"
import React, { useState, useEffect } from 'react';
import Card from './card';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    console.log("Tasks from local storage:", typeof( localStorage.getItem('tasks')));
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(storedTasks.split('-'));
    }
  }, []);
  
  useEffect(() => {
    console.log("Saving tasks to local storage:", tasks);
    localStorage.setItem('tasks', tasks.join('-'));
  }, [tasks]);
  

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleEditTask = (index: number) => {
    const updatedTask = prompt('Edit task:', tasks[index]);
    if (updatedTask !== null) {
      const newTasks = [...tasks];
      newTasks[index] = updatedTask;
      setTasks(newTasks);
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4 mt-4 text-center">To-do List</h1>
      <div className="flex m-4">
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full mt-4 mb-4 ml-2 mr-2 p-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAddTask}
          className=" min-w-20 mt-4 mb-4 ml-2 mr-2  bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
       <div className=' ml-5 mr-20 overflow-y-auto max-h-80 '>
          {tasks.map((task, index) => (
            <Card key={index} task={task} index={index} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask}  />
            
          ))}
        
      </div>
    </div>
  );
};

export default TaskList;
