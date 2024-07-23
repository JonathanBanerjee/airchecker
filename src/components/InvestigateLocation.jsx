import { useState, useEffect } from "react";
import { API_KEY } from "../../config";
import InvestigateListItem from "./InvestigateListItem";

const InvestigateLocation = ({ getAir, getPlaceInfo }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [displayList, setDisplayList] = useState(true);

  const handleClick = (index) => {
    const { lon, lat, name, state, country } = list[index];
    getAir(lon, lat);
    getPlaceInfo(name, state, country);
    setDisplayList(false);
  };

  const inputHandler = (input) => {
    setDisplayList(true);
    setInput(input);
  };

  useEffect(() => {
    if (input) {
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setList(data || []);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
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

      {displayList && Array.isArray(list) && (
        <ul>
          {list.map((e, index) => (
            <InvestigateListItem
              key={index}
              city={e.name}
              state={e.state}
              country={e.country}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default InvestigateLocation;
