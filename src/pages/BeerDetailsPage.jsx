import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beer, setBeer] = useState({});
  const { _id } = useParams();
  console.log(_id);
  console.log(beer);
  useEffect(() => {
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers/";
    axios.get(apiURL + _id).then((resp) => setBeer(resp.data));
  }, [_id]);
  return (
    <div>
      <h1>Detail Beer</h1>
      {beer && (
        <div key={beer._id} className="list-card">
          <div className="crad-pic">
            <img src={beer.image_url} style={{ width: "150px" }} />
          </div>
          <div className="card-text">
            <h3>Name: {beer.name} </h3>
            <h4>Tagline: {beer.tagline} </h4>
            <p>By: {beer.contributed_by} </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
