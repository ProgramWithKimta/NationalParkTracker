import React, { useState } from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  searchHistory: string[]; // Add search history as a prop
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchTermChange,
  onSearchSubmit,
  searchHistory,
}) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <form onSubmit={onSearchSubmit} style={{ marginBottom: "20px", marginLeft: "20px" }}>
        <input
          type="text"
          placeholder="Search parks..."
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          onMouseEnter={() => setShowHistory(true)} // Show history on hover
          onMouseLeave={() => setShowHistory(false)} // Hide history when not hovering
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Search
        </button>
      </form>
      {showHistory && searchHistory.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "300px",
            zIndex: 10,
          }}
          onMouseEnter={() => setShowHistory(true)} // Keep history visible when hovering over it
          onMouseLeave={() => setShowHistory(false)} // Hide history when leaving
        >
          {searchHistory.map((term, index) => (
            <div
              key={index}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: index < searchHistory.length - 1 ? "1px solid #eee" : "none",
              }}
              onClick={() => onSearchTermChange(term)} // Allow clicking on a history item to populate the search bar
            >
              {term}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;