type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search your Task"
      className=" font-primaryFont border-2  border-t-[#dfdfdf] border-r-[#808080] border-b-[#808080] border-l-[#dfdfdf] p-2 w-full h-[30px]"
      onChange={(event) => setSearch(event.target.value)}
      value={search}
    />
  );
};

export default SearchBar;
