import React from "react";
import '../css/homepage.css'
const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="mb-3 d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by Partnered For..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default Searchbar;
