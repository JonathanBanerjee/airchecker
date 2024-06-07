import { useState, useEffect } from "react";
import { AIR_URL, API_KEY } from "../config";
import SearchLocation from "./components/searchLocation";
// import "./css/App.css";
import "./css/styles.css";
import KeyTable from "./components/KeyTable";

function App() {
  const getAir = (lon = "74.3587", lat = "31.5204", name = "Lahore") => {
    fetch(`${AIR_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAir(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // API Call to OpenWeather AirQuality API
  const [air, setAir] = useState({ list: [] });
  useEffect(() => {
    getAir();
  }, []);

  // Display
  return (
    <>
      <SearchLocation getAir={getAir} />
      <div className="air-container">
        {air.list.map((data, index) => {
          return (
            <div className="air-card" key={index}>
              <h2 className="air-title">
                Overall Air Quality for {name} : {data.main.aqi}
              </h2>

              <div className="components">
                <h3 className="concentrations">Concentrations</h3>
                <p className="airtile">
                  Carbon Monoxide: {data.components.co} μg/m&sup3;
                </p>
                <p className="airtile">
                  Nitrogen Monoxide: {data.components.no} μg/m&sup3;
                </p>
                <p className="airtile">
                  Nitrogen Dioxide: {data.components.no2} μg/m&sup3;
                </p>
                <p className="airtile">
                  Ozone: {data.components.o3} μg/m&sup3;
                </p>
                <p className="airtile">
                  Sulphur Dioxide: {data.components.so2} μg/m&sup3;
                </p>
                <p className="airtile">
                  Fine Particles Matter: {data.components.pm2_5}
                  μg/&sup3;
                </p>
                <p className="airtile">
                  Coarse Particles Matter {data.components.pm10} μg/m&sup3;
                </p>
                <p className="airtile">
                  Ammonia: {data.components.nh3} μg/&sup3;
                </p>
              </div>
              <KeyTable />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
