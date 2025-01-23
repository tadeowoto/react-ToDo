type Props = {
  completed: number;
  total: number;
};

const ToDoCounter = ({ completed, total }: Props) => {
  return (
    <h1 className="font-primaryFont text-sm">
      {total} tasks | {completed} completed
    </h1>
  );
};

export default ToDoCounter;
