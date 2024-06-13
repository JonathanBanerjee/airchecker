import { useState, useEffect } from "react";
import { API_KEY } from "../../config";
import LocationListItem from "./LocationListItem.JSX";

const SearchLocation = ({ getAir, getPlaceInfo }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [displayList, setDisplayList] = useState(true);

  console.log(input);

  const handleClick = (index) => {
    //Deconstructing to get the lat and lon from the list.
    const { lon, lat, name, state, country } = list[index];
    console.log(lon, lat);
    getAir(lon, lat);
    getPlaceInfo(name, state, country);
    setDisplayList(false);
  };

  const inputHandler = (input) => {
    setDisplayList(true);
    setInput(input);
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
        onChange={(e) => inputHandler(e.target.value)}
      />

      {displayList && (
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
      )}
    </>
  );
};

export default SearchLocation;
