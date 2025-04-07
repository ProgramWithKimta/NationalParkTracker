import { useEffect, useState } from "react";
import SearchBar from "./searchbar";

interface Park {
  fullName: string;
  description: string;
  states: string;
  directionsInfo: string;
  entranceFees: { cost: number; title: string }[];
  images: { url: string; altText: string }[];
}

function ParkData() {
  const [parks, setParks] = useState<Park[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]); 

  const fetchParks = async (query: string) => {
    try {
      const response = await fetch(`/api/parks?q=${query}`);
      if (!response.ok) {
        throw new Error("Failed to fetch park data");
      }

      const data = await response.json();
      setParks(data.data);

      //search history
      if (query && !searchHistory.includes(query)) {
        setSearchHistory((prevHistory) => {
          const updatedHistory = [query, ...prevHistory];
          return updatedHistory.slice(0, 2); // 2 searches
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    fetchParks(""); 
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchParks(searchTerm);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>National Parks</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
        searchHistory={searchHistory} 
      />
      {parks.map((park) => (
        <div key={park.fullName} style={{ marginBottom: "20px" }}>
          <h2>{park.fullName}</h2>
          <p>{park.description}</p>
          <p>
            <strong>States:</strong> {park.states}
          </p>
          <p>
            <strong>Directions:</strong> {park.directionsInfo}
          </p>
          <h3>Entrance Fees</h3>
          <ul>
            {park.entranceFees.map((fee, index) => (
              <li key={index}>
                {fee.title}: ${fee.cost}
              </li>
            ))}
          </ul>
          <h3>Images</h3>
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
        </div>
      ))}
    </div>
  );
}

export default ParkData;