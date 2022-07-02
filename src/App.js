import React, { useEffect, useState } from "react";
import axios from 'axios'
import Hero from "./components/Hero";


function App() {
  const [time, setTime] = useState([])
    useEffect(() => {
      axios.get('http://worldtimeapi.org/api/ip').then((response)=> {
          setTime(response.data)
      })
    }, [])

    console.log(time)
  return (
    <div>
        <Hero time={time} />
    </div>
  );
}

export default App;
