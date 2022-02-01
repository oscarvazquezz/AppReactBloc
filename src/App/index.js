import React from 'react';
import {TodoCounter} from '../Componente/TodoCounter/TodoCounter.js'
import {TodoItem} from '../Componente/TodoIteam/TodoItem.js'
import {CreateTodoButton} from '../Componente/CreateTodoButton/CreateTodoButton.js'
import {TodoList} from '../Componente/TodoList/TodoList.js'
import {TodoSearch} from '../Componente/TodoSearch/TodoSearch';
import {TodoContext} from '../Componente/TodoContext';
import {Modal} from '../Componente/Modal/Modal.js';
import {TodoForm} from '../Componente/TodoForm/TodoForm.js';
import {TodoAlerta} from '../Componente/TodoAlerta/TodoAlerta.js';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodoAlerta msg={"Desespérate, hubo un error..."} img={"error."} />}
        {loading && <TodoAlerta msg={"Estamos cargando, no desesperes..."} img={"word."} />}
        {(!loading && !searchedTodos.length) && <TodoAlerta msg={"Creas tus tareas."} img={"bloc."} />}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal}/>
    </React.Fragment>
  );
}

export { AppUI };