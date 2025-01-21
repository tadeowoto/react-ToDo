
type Props = {
  task: string;
  completed: boolean;
};

const ToDoItem = ({ task, completed }: Props) => {

  

  const completedStyle = completed ? "line-through" : "";
  

  return (
    <li className="p-2.5 w-96 h-5 flex items-center gap-3">
      <input
        checked={completed}
        type="checkbox"
        className="w-3 h-3 border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]"
      />
      <p className={` ${completedStyle} font-primaryFont text-sm`}>{task}</p>
    </li>
  );
};

export default ToDoItem;
