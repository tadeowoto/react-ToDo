const TodosEmpty = () => {
  return (
    <div className="w-full h-16 flex justify-center items-center flex-col border-2 border-dashed border-gray-400 mt-1">
      <img src="/empty-todo.svg" alt="Empty todo list" className="w-4 h-4" />
      <p className="font-secondaryFont text-xl text-center text-gray-500">
        No tasks yet. Add your first task above!
      </p>
    </div>
  );
};

export default TodosEmpty;
