import NavOption from "./NavOption"

const ToDoNav = () => {
  return (
    <nav className="w-full h-[24px] flex bg-navColor p-5 items-center justify-between">
        <div className="w-1/2 flex items-center justify-start gap-5">
            <img src="../public/window.svg" alt="" className="w-5"/>
            <p className="text-white font-secondaryFont text-xl">Task Manager</p>
        </div>
        <div className="flex items-center justify-end gap-1">
            <NavOption src="/minimize.svg" type={2} />
            <NavOption src="/maximize.svg" type={3} />
            <NavOption src="/close.svg" type={1} />
        </div>
    </nav>
  )
}

export default ToDoNav