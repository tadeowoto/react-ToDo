import CreateToDo from "./CreateToDo";
import ToDoCounter from "./ToDoCounter";
import ToDoList from "./ToDoList";
import ToDoSearch from "./ToDoSearch";
import ToDoItem from "./ToDoItem";
import ToDoNav from "./ToDoNav";


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
];


const ToDo = () => {
  return (
    <article className="w-[506px] h-[262px] bg-cardBg border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]">
      <ToDoNav />
      <CreateToDo />
      <ToDoSearch />
      <ToDoList>
        {toDoTasks.map((task) => (
          <ToDoItem key={task.id} task={task.task} />
        ))}
      </ToDoList>
      <ToDoCounter completed={1} total={3} />
    </article>
  )
}

export default ToDo