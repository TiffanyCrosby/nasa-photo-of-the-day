import React, { useState, useEffect } from "react";
import Title from './components/title';
import Image from './components/image';
import Explanation from './components/explanation';
import axios from 'axios';

import "./App.css";


function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=w6IR1SazqhmfHVwAEcqI247x8t5D0zP2GNTVuTdA")
      .then((response) => {
        console.log('This is response: ', response.data);
        setNasaData(response.data);
      })
      .catch((error) => {
        console.log('Data NOT returned: ', error)
      })
  }
    , []);

  return (
    <div className="App">
      <Title title={nasaData.title} />
      <Image hdurl={nasaData.hdurl} />
      <Explanation explanation={nasaData.explanation} />
    </div>
  );
}

export default App;
