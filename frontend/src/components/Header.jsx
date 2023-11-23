import { Search } from "@mui/icons-material";
import { useSearch } from "../contexts/Search";

export const Header = () => {
  const { searchTerm, handleSearch } = useSearch();

  return (
    <header className="bg-red">
      <div className="mx-auto max-w-[1000px] w-full flex items-center justify-between pl-8 pr-8 pt-4 pb-4">
        <h1 className="font-smooch text-2xl text-yellow">Hero's Journey.</h1>
        <form
          action=""
          className="pt-1 pb-1 pl-1 pr-1 rounded-lg w-full max-w-xs flex justify-between bg-yellow"
        >
          <input
            type="text"
            placeholder="Search by name"
            className="w-full max-w-[270px] outline-none bg-yellow"
            value={searchTerm}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <Search className="text-darkYellow cursor-pointer" />
        </form>
      </div>
    </header>
  );
};
