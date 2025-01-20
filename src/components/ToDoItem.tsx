
type Props = {
    task: string
}

const ToDoItem = (task: Props) => {
  return (
    <li className="p-2.5 w-96 h-5 flex items-center gap-3">
      <input type="checkbox" className="w-3 h-3 border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]" />
      <p className="font-primaryFont text-sm">{task.task}</p>
    </li>
  )
}

export default ToDoItem