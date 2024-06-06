const LocationListItem = ({ city, state, index, handleClick }) => {
  return (
    <>
      <li
        onClick={() => handleClick(index)}
      >{`City: ${city} State: ${state} `}</li>
    </>
  );
};

export default LocationListItem;
