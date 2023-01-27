import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import ListItem from './ListItem';
import { todos, addTodo, clearTodos } from './ToDoSlice';

export default function MyList(props) {
  const toDos = useSelector(todos);
  //const [toDoItemArray, addNewItemToArray] = useState([...props.theList]);
  const [newItem, setNewItem] = useState('');
  const dispatch = useDispatch();

  const todoItems = toDos.map((item, index) => (
    <ListItem doThis={item} key={index} />
  ));
  return (
    <div>
      <h1>Things I should stop procrastinating:</h1>
      <ul>{todoItems}</ul>
      {newItem}
      <form>
        <input
          type="text"
          placeholder="Type an item here"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTodo(newItem))
            setNewItem('');
          }}
        >
          Add it!
        </button>
      </form>
      <button
        onClick={() => {
          console.log('Clearing list!');
          dispatch(clearTodos())
        }}
      >
        Clear the list!
      </button>
    </div>
  );
}
