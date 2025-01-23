type Props = {
  children: React.ReactNode;
};

const ToDoList = (tasks: Props) => {
  return (
    <ul className="w-full flex flex-col gap-3 pt-2 pr-2 pb-2 box-border">
      {tasks.children}
    </ul>
  );
};

export default ToDoList;
