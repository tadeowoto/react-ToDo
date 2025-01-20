import CreateToDo from "./CreateToDo";
import ToDoCounter from "./ToDoCounter";
import ToDoList from "./ToDoList";
import ToDoSearch from "./ToDoSearch";
import ToDoItem from "./ToDoItem";
import ToDoNav from "./ToDoNav";
import SearchBar from "./SearchBar";

const toDoTasks = [
  {
    id: 1,
    task: "task 1",
  },
  {
    id: 2,
    task: "task 2",
  },
  {
    id: 3,
    task: "task 3",
  },
  {
    id: 4,
    task: "task 4",
  },
  {
    id: 5,
    task: "task 5",
  },
  {
    id: 6,
    task: "task 6",
  },
  {
    id: 7,
    task: "task 7",
  },
  {
    id: 8,
    task: "task 8",
  },
  {
    id: 9,
    task: "task 9",
  },
  {
    id: 10,
    task: "task 10",
  },
  {
    id: 11,
    task: "task 11",
  },
];


const ToDo = () => {
  return (
    <article className="w-[506px] h-[262px] bg-cardBg border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]">
      <ToDoNav />
      <div className=" w-full h-3/4 p-4 box-border border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]">
          <div className="w-full flex gap-4">
              <ToDoSearch />
              <CreateToDo />
          </div>
          <div className="w-full mt-2">
              <SearchBar />
          </div>
          <div className="w-full h-3/5 overflow-y-scroll ">
              <ToDoList>
                {toDoTasks.map((task) => (
                  <ToDoItem key={task.id} task={task.task} />
                ))}
              </ToDoList>
          </div>
      </div>
      <div className="w-full h-fit flex align-center ml-1">
          <ToDoCounter completed={1} total={3} />
      </div>
    </article>
  )
}

export default ToDo