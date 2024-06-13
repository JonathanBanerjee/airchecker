import {
  carbonmonoxidecolour,
  nitrogendioxidecolour,
  ozonecolour,
  sulphurdioxidecolour,
  fineparticlesmattercolour,
  coarseparticulatemattercolour,
  overallcolour,
} from "../utils/colourCoding";
const CityDisplay = ({ city, air }) => {
  return (
    <>
      <div className="air-container">
        {air.list.map((data, index) => {
          return (
            <>
              <div className="air-card" key={index}>
                <h2 className="air-title">Overall Air Quality for {city}:</h2>
                <h3 className={`air-subheader ${overallcolour(data.main.aqi)}`}>
                  {data.main.aqi}
                </h3>

                <h3>Concentrations</h3>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Element</th>
                      <th scope="col">Concentration in μg/m&sup3; </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Carbon Monoxide</th>
                      <td
                        className={`carbonmonoxide ${carbonmonoxidecolour(
                          data.components.co
                        )}`}
                      >
                        {data.components.co}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nitrogen Dioxide</th>
                      <td
                        className={`nitrogendioxide ${nitrogendioxidecolour(
                          data.components.no2
                        )}`}
                      >
                        {data.components.no2}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Ozone</th>
                      <td
                        className={`ozone ${ozonecolour(data.components.o3)}`}
                      >
                        {data.components.o3}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Sulphur Dioxide</th>
                      <td
                        className={`sulphurdioxide ${sulphurdioxidecolour(
                          data.components.so2
                        )}`}
                      >
                        {data.components.so2}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Fine Particles Matter</th>
                      <td
                        className={`fineparticlesmatter ${fineparticlesmattercolour(
                          data.components.pm2_5
                        )}`}
                      >
                        {data.components.pm2_5}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Coarse Particles Matter</th>
                      <td
                        className={`coarseparticlesmatter ${coarseparticulatemattercolour(
                          data.components.pm10
                        )}`}
                      >
                        {data.components.pm10}
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Ammonia</th>
                      <td>{data.components.nh3} </td>
                    </tr>
                    <tr>
                      <th scope="row">Nitrogen Monoxide</th>
                      <td>{data.components.no} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Note: Ammonia and Nitrogen Monoxide do not have an effect on the
                air quality index. NH3: min value 0.1 - max value 200 NO: min
                value 0.1 - max value 100.{" "}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CityDisplay;
