import React, { useState } from "react";
import SearchBar from "../components/searchbar";

interface Park {
  fullName: string;
  description: string;
  states: string;
  directionsInfo: string;
  entranceFees: { cost: number; title: string }[];
  images: { url: string; altText: string }[];
}

const HomePage: React.FC = () => {
  const [parks, setParks] = useState<Park[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/parks?q=${query}`);
      if (!response.ok) {
        throw new Error("Failed to fetch park data");
      }

      const data = await response.json();
      setParks(data.data); // Assuming the API returns a `data` array

      // Update search history
      if (query && !searchHistory.includes(query)) {
        setSearchHistory((prevHistory) => [query, ...prevHistory].slice(0, 5)); // Keep the last 5 searches
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Welcome to the National Park Tracker</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchTerm);
        }}
        searchHistory={searchHistory}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div>
        <h2>Search Results:</h2>
        {parks.length === 0 && !loading && <p>No results found.</p>}
        <ul>
          {parks.map((park, index) => (
            <li key={index}>
              <h3>{park.fullName}</h3>
              <p>{park.description}</p>
              <p>
                <strong>States:</strong> {park.states}
              </p>
              <p>
                <strong>Directions:</strong> {park.directionsInfo}
              </p>
              <h4>Entrance Fees:</h4>
              <ul>
                {park.entranceFees.map((fee, feeIndex) => (
                  <li key={feeIndex}>
                    {fee.title}: ${fee.cost}
                  </li>
                ))}
              </ul>
              <h4>Images:</h4>
              <div>
                {park.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image.url}
                    alt={image.altText}
                    style={{ width: "200px", marginRight: "10px" }}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;