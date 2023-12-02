import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
    const[randomBeer, setRandomBeer] = useState({});
    console.log(randomBeer);
    useEffect(() => {
        const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random/";
        axios
        .get(apiURL)
        .then((resp) => setRandomBeer(resp.data))
    },[])
    return (
        <div>
            <h1>Random Beer</h1>
            {randomBeer && 
            <div key={randomBeer._id} className="list-card">
            <div className="crad-pic">
              <img src={randomBeer.image_url} style={{ width: "150px" }} />
            </div>
            <div className="card-text">
              <h3>Name: {randomBeer.name} </h3>
              <h4>Tagline: {randomBeer.tagline} </h4>
              <p>By: {randomBeer.contributed_by} </p>
            </div>
          </div>
            }
        </div>
    )
}

export default RandomBeersPage;
