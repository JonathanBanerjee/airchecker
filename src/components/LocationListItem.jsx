const LocationListItem = ({ city, state, country, index, handleClick }) => {
  return (
    <>
      <li onClick={() => handleClick(index)}>{` ${city}, ${
        state ? state : ``
      }, ${country}
      `}</li>
    </>
  );
};

export default LocationListItem;
