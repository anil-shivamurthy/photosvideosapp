import React, {useState} from "react";
import './search.css';

const Search = () => {
    const [search, setSearch] = useState();

    const handleChange=(event)=> {  
        const search = event.target.value;      
        setSearch(search);  
    } 
  return (
    <div>
      <div className="search-heading">Discover the world's best photos and videos</div>
      <div className="search-subheading">Best memories online</div>
      <form className="form-layout">
        <input
          onChange={handleChange}
          className="search-bar"
          placeholder="Search photos, videos"
          type="text"
        />
        <button className="search-button">SEARCH</button>
      </form>
    </div>
  );
};

export default Search;
