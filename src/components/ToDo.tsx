import CreateToDo from "./CreateToDo";
import ToDoCounter from "./ToDoCounter";
import ToDoList from "./ToDoList";
import ToDoSearch from "./ToDoSearch";
import ToDoItem from "./ToDoItem";
import ToDoNav from "./ToDoNav";
import SearchBar from "./SearchBar";
import { useState } from "react";

const defaultTodos = [
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


const ToDo = () => {

  const [search, setSearch] = useState('');
  const [toDoTasks, setToDoTasks] = useState(defaultTodos); //set todos es para crear todos

  const completedTodos = toDoTasks.filter((task) => task.completed).length;
  const totalTodos = toDoTasks.length;

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
          <div className="w-full h-3/5 overflow-y-scroll ">
              <ToDoList>
                {toDoTasks.map((task) => (
                  <ToDoItem key={task.id} task={task.task} completed={task.completed} />
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