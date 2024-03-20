import Benefits from "../../components/Home-components/Benefits"
import Conducteur from "../../components/Home-components/Conducteur"
import Hero from "../../components/Home-components/Hero"
import CarpoolSearch from "../../components/Home-components/CarpoolSearch"
import { useEffect, useState } from "react"
import axios from "axios"




const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/auth/verify')
      .then(res => {
        if (res.data.status) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
  }, []);

  return (
    <div className="w-screen">
      
      <Hero />
      <Benefits/>
      <CarpoolSearch isLoggedIn={isLoggedIn}/>
      <Conducteur isLoggedIn={isLoggedIn} />
      
    </div>
  )
}

export default Home