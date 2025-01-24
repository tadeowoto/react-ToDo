const ToDoForm = () => {
  return (
    <form className="w-full flex flex-col gap-1 p-1 box-border">
      <div className="w-full h-1/2 flex flex-col gap-2">
        <label htmlFor="">Task Description:</label>
        <textarea
          name=""
          id=""
          placeholder="follow tadeowoto on github"
          className="w-full h-full border-2 border-solid border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf] font-primaryFont"
        ></textarea>
      </div>
      <div className="w-full h-1/2 flex justify-end items-end">
        <button
          type="submit"
          className="ToDoForm-button w-24 h-8 border-2 border-solid border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]"
        >
          + Add Task
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
