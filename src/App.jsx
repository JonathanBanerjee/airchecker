import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import "./css/App.css";

function App() {
  const [air, setAir] = useState({ list: [] });
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAir(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="air-container">
        {air.list.map((data, index) => {
          return (
            <div className="air-card" key={index}>
              <h2 className="air-title">Air Quality: {data.main.aqi}</h2>

              <div className="keycontainer">
                <h3 className="airkey">Air Quality Key:</h3>
                <ul>
                  <li>1 = Good</li>
                  <li> 2 = Fair</li>
                  <li>3 = Moderate</li>
                  <li>4 = Poor</li>
                  <li> 5 = Very Poor</li>
                </ul>
              </div>

              <div className="components">
                <h3 className="concentrations">Concentrations</h3>
                <p className="airtile">
                  Carbon Dioxide: {data.components.co} μg/m&sup3;
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
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
