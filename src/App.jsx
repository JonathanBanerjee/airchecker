import { useState, useEffect } from "react";
import { AIR_URL, API_KEY } from "../config";
import SearchLocation from "./components/searchLocation";
// import "./css/App.css";
import "./css/styles.css";

function App() {
  const getAir = (lon = "74.3587", lat = "31.5204") => {
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
              <table>
                <thead>
                  <h3>Air Quality Key:</h3>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Overall Rating</th>
                    <th scope="col">Carbon Monoxide &#40;μg/m &sup3;&#41;</th>
                    <th scope="col">Nitrogen Dioxide &#40;μg/m &sup3;&#41;</th>
                    <th scope="col">Ozone &#40;μg/m &sup3;&#41; </th>
                    <th scope="col">Sulphur Dioxide &#40;μg/m &sup3;&#41;</th>
                    <th scope="col">
                      Fine Particles Matter &#40;μg/m &sup3;&#41;{" "}
                    </th>
                    <th scope="col">
                      Coarse Particulate Matter &#40;μg/m &sup3;&#41;{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="good"> Good</td>
                    <td data-label="Overall Rating">1</td>
                    <td data-label="Carbon Monoxide &#40; μg/m &sup3;&#41;">
                      0-4400
                    </td>
                    <td data-label="Nitrogen Dioxide &#40;μg/m &sup3;&#41;">
                      0-40
                    </td>
                    <td data-label="Ozone &#40;μg/m &sup3;&#41;">0-60</td>
                    <td data-label="Sulphur Dioxide &#40;μg/m &sup3;&#41;">
                      0-20
                    </td>
                    <td data-label="Fine Particles Matter &#40;μg/m &sup3;&#41;">
                      0-10
                    </td>
                    <td data-label="Coarse Particulate Matter &#40;μg/m &sup3;&#41;">
                      0-20
                    </td>
                  </tr>
                  <tr>
                    <td className="fair">Fair</td>
                    <td data-label="Overall Rating">2</td>
                    <td data-label="Carbon Monoxide &#40; μg/m &sup3;&#41;">
                      4400-9400
                    </td>
                    <td data-label="Nitrogen Dioxide &#40;μg/m &sup3;&#41;">
                      40-70
                    </td>
                    <td data-label="Ozone &#40;μg/m &sup3;&#41;">60-100</td>
                    <td data-label="Sulphur Dioxide &#40;μg/m &sup3;&#41;">
                      20-80
                    </td>
                    <td data-label="Fine Particles Matter &#40;μg/m &sup3;&#41;">
                      10-25
                    </td>
                    <td data-label="Coarse Particulate Matter &#40;μg/m &sup3;&#41;">
                      20-50
                    </td>
                  </tr>
                  <tr>
                    <td className="moderate">Moderate</td>
                    <td data-label="Overall Rating">3</td>
                    <td data-label="Carbon Monoxide &#40; μg/m &sup3;&#41;">
                      94000-12400
                    </td>
                    <td data-label="Nitrogen Dioxide &#40;μg/m &sup3;&#41;">
                      70-150
                    </td>
                    <td data-label="Ozone &#40;μg/m &sup3;&#41;">100-140</td>
                    <td data-label="Sulphur Dioxide &#40;μg/m &sup3;&#41;">
                      80-250
                    </td>
                    <td data-label="Fine Particles Matter &#40;μg/m &sup3;&#41;">
                      25-50
                    </td>
                    <td data-label="Coarse Particulate Matter &#40;μg/m &sup3;&#41;">
                      50-100
                    </td>
                  </tr>
                  <tr>
                    <td className="poor">Poor</td>
                    <td data-label="Overall Rating">4</td>
                    <td data-label="Carbon Monoxide &#40; μg/m &sup3;&#41;">
                      12400-15400
                    </td>
                    <td data-label="Nitrogen Dioxide &#40;μg/m &sup3;&#41;">
                      150-200
                    </td>
                    <td data-label="Ozone &#40;μg/m &sup3;&#41;">140-180</td>
                    <td data-label="Sulphur Dioxide &#40;μg/m &sup3;&#41;">
                      250-350
                    </td>
                    <td data-label="Fine Particles Matter &#40;μg/m &sup3;&#41;">
                      50-75
                    </td>
                    <td data-label="Coarse Particulate Matter &#40;μg/m &sup3;&#41;">
                      100-200
                    </td>
                  </tr>
                  <tr>
                    <td className="verypoor">Very Poor</td>
                    <td data-label="Overall Rating">5</td>
                    <td data-label="Carbon Monoxide &#40; μg/m &sup3;&#41;">
                      &#8805;15400
                    </td>
                    <td data-label="Nitrogen Dioxide &#40;μg/m &sup3;&#41;">
                      &#8805;200
                    </td>
                    <td data-label="Ozone &#40;μg/m &sup3;&#41;">&#8805;180</td>
                    <td data-label="Sulphur Dioxide &#40;μg/m &sup3;&#41;">
                      &#8805;350
                    </td>
                    <td data-label="Fine Particles Matter &#40;μg/m &sup3;&#41;">
                      &#8805;75
                    </td>
                    <td data-label="Coarse Particulate Matter &#40;μg/m &sup3;&#41;">
                      &#8805;200
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="air-title">
                Overall Air Quality: {data.main.aqi}
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
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
