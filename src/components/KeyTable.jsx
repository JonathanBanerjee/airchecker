const KeyTable = () => {
  return (
    <>
      <h3>Air Quality Key:</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Overall Rating</th>
            <th scope="col">Carbon Monoxide &#40;μg/m &sup3;&#41;</th>
            <th scope="col">Nitrogen Dioxide &#40;μg/m &sup3;&#41;</th>
            <th scope="col">Ozone &#40;μg/m &sup3;&#41; </th>
            <th scope="col">Sulphur Dioxide &#40;μg/m &sup3;&#41;</th>
            <th scope="col">Fine Particles Matter &#40;μg/m &sup3;&#41; </th>
            <th scope="col">
              Coarse Particulate Matter &#40;μg/m &sup3;&#41;{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="good"> Good</td>
            <td data-label="Overall Rating">1</td>
            <td data-label="Carbon Monoxide &#40; μg/m &sup3;&#41;">0-4400</td>
            <td data-label="Nitrogen Dioxide &#40;μg/m &sup3;&#41;">0-40</td>
            <td data-label="Ozone &#40;μg/m &sup3;&#41;">0-60</td>
            <td data-label="Sulphur Dioxide &#40;μg/m &sup3;&#41;">0-20</td>
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
            <td data-label="Nitrogen Dioxide &#40;μg/m &sup3;&#41;">40-70</td>
            <td data-label="Ozone &#40;μg/m &sup3;&#41;">60-100</td>
            <td data-label="Sulphur Dioxide &#40;μg/m &sup3;&#41;">20-80</td>
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
            <td data-label="Nitrogen Dioxide &#40;μg/m &sup3;&#41;">70-150</td>
            <td data-label="Ozone &#40;μg/m &sup3;&#41;">100-140</td>
            <td data-label="Sulphur Dioxide &#40;μg/m &sup3;&#41;">80-250</td>
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
            <td data-label="Nitrogen Dioxide &#40;μg/m &sup3;&#41;">150-200</td>
            <td data-label="Ozone &#40;μg/m &sup3;&#41;">140-180</td>
            <td data-label="Sulphur Dioxide &#40;μg/m &sup3;&#41;">250-350</td>
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
    </>
  );
};

export default KeyTable;
