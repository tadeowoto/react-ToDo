/* eslint-disable */
import CreateToDo from "./CreateToDo";
import ToDoCounter from "./ToDoCounter";
import ToDoList from "./ToDoList";
import ToDoSearch from "./ToDoSearch";
import ToDoItem from "./ToDoItem";
import ToDoNav from "./ToDoNav";
import SearchBar from "./SearchBar";
import { useState } from "react";

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

function useLocalStorage(itemName : string, initialValue : any) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItems;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = []
  }else{
    parsedItems = JSON.parse(localStorageItem);
  }
  const [items, setItems] = useState(parsedItems);
  const saveItems = (newItem : any) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem)
  }

  return [items , saveItems]
  
}

const ToDo = () => {

  const [todos, saveTodos] = useLocalStorage('TODOS-V1', []); 
  const [search, setSearch] = useState('');
  const completedTodos = todos.filter((task : any) => task.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter((task : any) => task.task.toLowerCase().includes(search.toLowerCase()));



  const finishTodo = ( id: number ) => {
    const newTodos = [... todos];
    const todoIndex = newTodos.findIndex((task) => task.id === id);
    newTodos[todoIndex].completed= true
    saveTodos(newTodos)
  }
  const deleteTodo = ( id: number ) => {
    const newTodos = [... todos];
    const todoIndex = newTodos.findIndex((task) => task.id === id);
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <article className="w-[506px] h-[262px] bg-cardBg border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]">
      <ToDoNav />
      <div className=" w-full h-3/4 p-4 box-border border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]">
          <div className="w-full flex gap-4">
              <ToDoSearch />
              <CreateToDo />
          </div>
          <div className="w-full mt-2">
              <SearchBar 
                search={search}
                setSearch={setSearch}
              />
          </div>
          <div className="w-full h-3/5 overflow-auto  ">
              <ToDoList>
                {filteredTodos.map((task : any) => (
                  <ToDoItem key={task.id} task={task.task} completed={task.completed} onComplete={() => finishTodo(task.id)} onDelete={() => deleteTodo(task.id)} />
                ))}
              </ToDoList>
          </div>
      </div>
      <div className="w-full h-fit flex align-center ml-1">
          <ToDoCounter completed={completedTodos} total={totalTodos} />
      </div>
    </article>
  )
}

export default ToDo