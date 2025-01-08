import { RiSearch2Line } from "react-icons/ri";
import "./SearchChat.css";

type SearchChatProps = {
  value: string;
  onSearch: (query: string) => void;
};

const SearchChat = ({ value, onSearch }: SearchChatProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <form className="search-form">
        <RiSearch2Line className="search-icon" />
        <input
          type="text"
          value={value}
          className="search-input"
          placeholder="Search chat"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SearchChat;
