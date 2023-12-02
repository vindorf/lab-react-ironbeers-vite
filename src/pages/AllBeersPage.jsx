import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  console.log('All Beers: ', beers);

  useEffect(() => {
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers/";
    axios.get(apiURL).then((resp) => {
      setBeers(resp.data);
    });
  }, []);

  const filter = (id) => {
    console.log(id);
    const filtered = beers.filter((e) => {
      return e._id !== id;
    })
    setBeers(filtered);
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setBeers(filteredBeers)
  };
  const filteredBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
    
  });
 

  console.log(filteredBeers)
  return (
    <div>
      <h1>All Beers</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {beers && beers.map((e) => {
        return(
            <div key={e._id} className="list-card">
                <div className="crad-pic">
                <img src={e.image_url} style={{width: '150px'}}/>
                </div>
                <div className="card-text">
                    <h3>Name: {e.name} </h3>
                    <h4>Tagline: {e.tagline} </h4>
                    <p>By: {e.contributed_by} </p>
                    <Link to={`/beers/${e._id}`}>Details</Link>
                    <br></br>
                    <button onClick={() => filter(e._id)}>Delete</button>

                </div>
                
            </div>
        )
      })}
    </div>
  );
}

export default AllBeersPage;
