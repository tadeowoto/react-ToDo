import NavOption from "../atoms/NavOption";

type Props = {
  closeWindow: () => void;
};

const ModalNav = ({ closeWindow }: Props) => {
  return (
    <nav className="w-full h-[14px] flex bg-navColor p-5 items-center justify-between">
      <div className="w-1/2 flex items-center justify-start gap-5">
        <img src="/newTask.svg" alt="" className="w-5" />
        <p className="text-white font-secondaryFont text-xl">New Task</p>
      </div>
      <div className="flex items-center justify-end gap-1">
        <span onClick={closeWindow}>
          <NavOption src="/close.svg" type={1} />
        </span>
      </div>
    </nav>
  );
};

export default ModalNav;
