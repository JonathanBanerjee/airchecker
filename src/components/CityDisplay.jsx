const CityDisplay = ({ city, air }) => {
  return (
    <>
      <div className="air-container">
        {air.list.map((data, index) => {
          return (
            <>
              <div className="air-card" key={index}>
                <h2 className="air-title">
                  Overall Air Quality for {city} : {data.main.aqi}
                </h2>
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
                      <td>{data.components.co} μg/m&sup3;</td>
                    </tr>
                    <tr>
                      <th scope="row">Nitrogen Dioxide</th>
                      <td>{data.components.no2} μg/m&sup3;</td>
                    </tr>
                    <tr>
                      <th scope="row">Ozone</th>
                      <td>{data.components.o3} μg/m&sup3;</td>
                    </tr>
                    <tr>
                      <th scope="row">Sulphur Dioxide</th>
                      <td>{data.components.so2} μg/m&sup3;</td>
                    </tr>
                    <tr>
                      <th scope="row">Fine Particles Matter</th>
                      <td>{data.components.pm2_5}</td>
                    </tr>
                    <tr>
                      <th scope="row">Coarse Particles Matter</th>
                      <td>{data.components.pm10} μg/m&sup3;</td>
                    </tr>

                    <tr>
                      <th scope="row">Ammonia</th>
                      <td>{data.components.nh3} μg/&sup3;</td>
                    </tr>
                    <tr>
                      <th scope="row">Nitrogen Monoxide</th>
                    </tr>
                    <td>{data.components.no} μg/m&sup3;</td>
                  </tbody>
                </table>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CityDisplay;
