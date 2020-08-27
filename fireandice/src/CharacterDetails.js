import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./Details";

function CharacterDetails(props) {
  const [character, setCharacter] = useState(null);
  const [gender, setGender] = useState(null);
  const [culture, setCulture] = useState(null);
  const [born, setBorn] = useState(null);
  const [titles, setTitles] = useState(null);
  //console.log(props.history.location.state);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(props.history.location.state);
    setCharacter(response.data.name);
    setGender(response.data.gender);
    setCulture(response.data.culture);
    setBorn(response.data.born);
    setTitles(response.data.titles);
  };

  return (
    <div className="details">
      <p>{character}</p>
      <p>{gender}</p>
      <p>{culture}</p>
      <p>{born}</p>
      {titles.map((titles) => (
        <p>{titles}</p>
      ))}
    </div>
  );
}
export default CharacterDetails;
