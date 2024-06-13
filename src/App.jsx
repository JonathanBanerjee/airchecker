import { useState } from "react";
import { AIR_URL, API_KEY } from "../config";

// import SearchLocation from "./components/searchLocation";

// import "./css/App.css";
import "./css/styles.css";
import KeyTable from "./components/KeyTable";
import CityDisplay from "./components/CityDisplay";
import InvestigateLocation from "./components/InvestigateLocation";

function App() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const getPlaceInfo = (name, state, country) => {
    setCity(name);
    setState(state);
    setCountry(country);
  };

  const getAir = (lon, lat) => {
    fetch(`${AIR_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setAir(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // API Call to OpenWeather AirQuality API
  const [air, setAir] = useState({ list: [] });

  return (
    <>
      {/* Passing reference down as a prop */}
      <InvestigateLocation getAir={getAir} getPlaceInfo={getPlaceInfo} />
      <CityDisplay city={city} state={state} country={country} air={air} />
      <KeyTable />
    </>
  );
}

export default App;
