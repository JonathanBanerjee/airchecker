import { useState, useEffect } from "react";
import { API_KEY } from "../../config";
import LocationListItem from "./LocationListItem.jsx";

const SearchLocation = ({ getAir, getCity }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [displayList, setDisplayList] = useState(true);

  console.log(input);

  const handleListClick = (index) => {
    setDisplayList(false);
    console.log(`Item at index ${index} clicked`);
  };

  const handleClick = (index) => {
    //Deconstructing to get the lat and lon from the list.
    const { lon, lat, name } = list[index];
    console.log(lon, lat);
    getAir(lon, lat);
    getCity(name);
  };

  useEffect(() => {
    input &&
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${API_KEY}`
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
          <>
            {console.log(e)}
            <LocationListItem
              city={e.name}
              state={e.state}
              country={e.country}
              index={index}
              handleClick={handleClick}
            />
          </>
        ))}
      </ul>
    </>
  );
};

export default SearchLocation;
