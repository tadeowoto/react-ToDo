import CreateToDo from "./components/CreateToDo";
import ToDoCounter from "./components/ToDoCounter";
import ToDoList from "./components/ToDoList";
import ToDoSearch from "./components/ToDoSearch";
import ToDoItem from "./components/ToDoItem";
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

function App() {
  return (
    <>
      <CreateToDo />
      <ToDoCounter completed={4} total={10} />
      <ToDoSearch />
      <ToDoList>
        {toDoTasks.map((task) => (
          <ToDoItem key={task.id} task={task.task} />
        ))}
      </ToDoList>
    </>
  );
}

export default App;
