type Props = {
  task: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
};

const ToDoItem = ({ task, completed, onComplete, onDelete }: Props) => {
  const completedStyle = completed ? "line-through" : "";

  return (
    <li className="p-2.5 w-96 h-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          onClick={onComplete}  
          defaultChecked={completed}
          type="checkbox"
          className="w-3 h-3 border-[3px] border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]"
        />
        <p className={` ${completedStyle} font-primaryFont text-sm`}>{task}</p>
      </div>
      <div>
        <button
          onClick={onDelete}
          className="w-14 h-6 text-sm border-2 border-solid border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
