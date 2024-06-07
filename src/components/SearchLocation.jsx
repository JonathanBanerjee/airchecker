import { useState, useEffect } from "react";
import { API_KEY } from "../../config";
import LocationListItem from "./LocationListItem.JSX";

const SearchLocation = ({ getAir }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  console.log(input);

  const handleClick = (index) => {
    //Deconstructing to get the lat and lon from the list.
    const { lon, lat, name } = list[index];
    console.log(lon, lat, name);
    getAir(lon, lat, name);
  };

  useEffect(() => {
    input &&
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setList(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, [input]);
  return (
    <>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search for a location"
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {list.map((e, index) => (
          <LocationListItem
            city={e.name}
            state={e.state}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
};

export default SearchLocation;
