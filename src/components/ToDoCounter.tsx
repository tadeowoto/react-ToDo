
type Props = {
    completed: number,
    total: number
}

const ToDoCounter = ( {completed, total}: Props ) => {
  return (
    <h1>You completed {completed} out of {total} tasks</h1>
  )
}

export default ToDoCounter