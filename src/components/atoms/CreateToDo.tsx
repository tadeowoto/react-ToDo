type Props = {
  createTodo: () => void;
};

const CreateToDo = ({ createTodo }: Props) => {
  return (
    <button
      className="w-24 h-8 border-2 border-solid border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]"
      onClick={createTodo}
    >
      Add Task
    </button>
  );
};

export default CreateToDo;
