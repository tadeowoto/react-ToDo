
type Props = {
    children: React.ReactNode
}

const ToDoList = (tasks: Props) => {
  return (
    <ul>
        {tasks.children}
    </ul>
  )
}

export default ToDoList
