type Props = {
  createTodo: () => void;
};

const CreateToDo = ({ createTodo }: Props) => {
  return (
    <button
      className="w-full flex items-center gap-2 h-8 border-2 border-solid text-start pl-2 border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]"
      onClick={createTodo}
    >
      <img src="/newTask.svg" alt="" className="w-4" />
      New Task
    </button>
  );
};

export default CreateToDo;
