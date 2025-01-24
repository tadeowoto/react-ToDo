import ReactDOM from "react-dom";
import ModalNav from "./ModalNav";
type Props = {
  children: React.ReactNode;
  closeWindow: () => void;
};

const ToDoModal = ({ closeWindow, children }: Props) => {
  return ReactDOM.createPortal(
    <div className="flex justify-center items-center w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0  ">
      <div className="Modal w-[378px] h-[174px] bg-cardBg border-2 border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf]">
        <ModalNav closeWindow={closeWindow} />
        {children}
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default ToDoModal;
