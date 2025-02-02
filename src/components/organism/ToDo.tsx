/* eslint-disable */
import CreateToDo from "../atoms/CreateToDo";
import ToDoCounter from "../atoms/ToDoCounter";
import ToDoList from "../molecules/ToDoList";
import ToDoItem from "../molecules/ToDoItem";
import ToDoNav from "../molecules/ToDoNav";
import SearchBar from "../atoms/SearchBar";
import TodosEmpty from "../atoms/TodosEmpty";
import TodosError from "../atoms/TodosError";
import TodosSkeleton from "../atoms/TodosSkeleton";
import { useState } from "react";
import React from "react";
import ToDoModal from "../molecules/ToDoModal";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ToDoForm from "../molecules/ToDoForm";

/* const defaultTodos = [
  {
    id: 1,
    task: "Do homework",
    completed: false
  },
  {
    id: 2,
    task: "Go to the gym",
    completed: true
  },
];

localStorage.setItem('TODOS-V1', JSON.stringify(defaultTodos));  */

const ToDo = () => {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS-V1", []);

  const [search, setSearch] = useState("");
  const completedTodos = todos.filter((task: any) => task.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter((task: any) =>
    task.task.toLowerCase().includes(search.toLowerCase())
  );

  const [openModal, setOpenModal] = React.useState(false);

  const finishTodo = (id: number) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((task) => task.id === id);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (id: number) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((task) => task.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  function createTodo() {
    setOpenModal(!openModal);
  }

  function addTodo(task: string) {
    const newTodos = [...todos];
    newTodos.push({
      id: newTodos.length + 1,
      task: task,
      completed: false,
    });
    saveTodos(newTodos);
  }

  return (
    <article className="w-[506px] h-[262px] bg-cardBg border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]">
      <ToDoNav />
      <div className=" w-full h-3/4 p-4 box-border border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]">
        <div className="w-full flex gap-4">
          <CreateToDo createTodo={createTodo} />
        </div>
        <div className="w-full mt-2">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="w-full h-3/5 overflow-auto  ">
          <ToDoList>
            {loading && <TodosSkeleton />}
            {error && <TodosError />}
            {!loading && filteredTodos.length === 0 && <TodosEmpty />}

            {filteredTodos.map((task: any) => (
              <ToDoItem
                key={task.id}
                task={task.task}
                completed={task.completed}
                onComplete={() => finishTodo(task.id)}
                onDelete={() => deleteTodo(task.id)}
              />
            ))}
          </ToDoList>
        </div>
      </div>
      <div className="w-full h-fit flex align-center ml-1">
        <ToDoCounter completed={completedTodos} total={totalTodos} />
      </div>
      {openModal && (
        <ToDoModal closeWindow={createTodo}>
          <ToDoForm addTodo={addTodo} />
        </ToDoModal>
      )}
    </article>
  );
};

export default ToDo;
