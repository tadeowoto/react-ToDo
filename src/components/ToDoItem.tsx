
type Props = {
    task: string
}

const ToDoItem = (task: Props) => {
  return (
    <li className="">{task.task}
        <button>❎</button>
    </li>
  )
}

export default ToDoItem