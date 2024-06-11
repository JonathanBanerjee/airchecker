import { useState, useEffect } from "react";
import { AIR_URL, API_KEY } from "../config";
import SearchLocation from "./components/SearchLocation";
// import "./css/App.css";
import "./css/styles.css";
import KeyTable from "./components/KeyTable";
import CityDisplay from "./components/CityDisplay";

function App() {
  const [city, setCity] = useState("");

  const getCity = (e) => {
    setCity(e);
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
      <SearchLocation getAir={getAir} getCity={getCity} />
      <CityDisplay city={city} air={air} />
      <KeyTable />
    </>
  );
}

export default App;
