import React from 'react';

interface CardProps {
  task: string;
  index: number;
  handleEditTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
}

const Card: React.FC<CardProps> = ({ task, index, handleEditTask, handleDeleteTask }) => {
  return (
    <div key={index} className="flex items-center rounded-lg p-4 mb-2 border-2 mr-10">
      <div className="flex-grow text-black">{task}</div>
      <div className="flex gap-2">
        <button
          onClick={() => handleEditTask(index)}
          className="text-blue-500 hover:text-blue-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.293 3.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.217-1.217l1-3c.056-.169.132-.326.224-.467l10-10zM13 6l1-1-1-1-1 1 1 1zm-6.657 9.95l6.31-6.31-1.414-1.414-6.31 6.31 1.414 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={() => handleDeleteTask(index)}
          className="text-red-500 hover:text-red-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
