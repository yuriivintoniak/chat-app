import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import "./SearchChat.css";

const SearchChat = () => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
