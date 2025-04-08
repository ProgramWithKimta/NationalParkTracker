import React, { useState, useEffect } from "react";
import { Park } from "../interfaces/ParkData"; // Import the Park interface
import SearchBar from "./searchbar";

const ParkData: React.FC = () => {
  const [parks, setParks] = useState<Park[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchParks = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/parks?q=${query}`);
      if (!response.ok) {
        throw new Error("Failed to fetch park data");
      }

      const data = await response.json();
      setParks(data.data);

      // Update search history
      if (query && !searchHistory.includes(query)) {
        setSearchHistory((prevHistory) => [query, ...prevHistory].slice(0, 5));
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchParks(searchTerm);
  };

  useEffect(() => {
    fetchParks(""); // Fetch all parks on initial load
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
        searchHistory={searchHistory}
      />
      {loading && <p>Loading...</p>}
      {parks.length === 0 && !loading && <p>No results found.</p>}
      <ul>
        {parks.map((park) => (
          <li key={park.id}>
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
              {park.entranceFees.map((fee, index) => (
                <li key={index}>
                  {fee.title}: ${fee.cost}
                </li>
              ))}
            </ul>
            <h4>Images:</h4>
            <div>
              {park.images.map((image, index) => (
                <img
                  key={index}
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
  );
};

export default ParkData;