type Props = {
  src: string;
  type: number;
};

const NavOption = ({ src, type }: Props) => {
  let style;

  switch (type) {
    case 1:
      style =
        "w-7 h-7 flex items-center justify-center hover:bg-red-500 bg-cardBg border-2 border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf] cursor-pointer";
      break;
    case 2:
      style =
        "w-7 h-7 flex items-center justify-center hover:bg-yellow-500 bg-cardBg border-2 border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf] cursor-pointer";
      break;
    case 3:
      style =
        "w-7 h-7 flex items-center justify-center hover:bg-green-500 bg-cardBg border-2 border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf] cursor-pointer";
      break;
  }

  return (
    <div className={style}>
      <img src={src} alt="window icon" className="w-4" />
    </div>
  );
};

export default NavOption;
