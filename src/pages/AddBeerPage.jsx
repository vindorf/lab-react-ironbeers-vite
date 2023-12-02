import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [contribut, setContribut] = useState("");
  const [image_url, setImg] = useState("");
  const navigate = useNavigate();
  console.log(name)

const handleSubmit = (e) => {
    e.preventDefault();
    const body = {name: name, tagline: tagline,description:description,
        contributed_by: contribut,  image_url: image_url}
        const apiURL = "https://ih-beers-api2.herokuapp.com/beers/new";
       axios
       .post(apiURL,body)
       .then((resp) => {
        setName("");
        setTagline("");
        setDescription("");
        setContribut("");
        setImg("");
        navigate('/beers')
       })
}

  return (
    <div>
      <h1>Create new beer</h1>
      <div className="card-input">
        <form onSubmit={handleSubmit}>
          <label></label>
          <input
          placeholder="   Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label></label>
          <input
          placeholder="   Tagline"
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
          <label></label>
          <input
          placeholder="   Description"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label></label>
          <input
          placeholder="   Contributed by"
            type="text"
            name="contribute"
            value={contribut}
            onChange={(e) => setContribut(e.target.value)}
          />
          <label></label>
          <input
          placeholder="   Image Url"
            type="text"
            name="img"
            onChange={(e) => setImg(e.target.value)}
            value={image_url}
          /> <br></br>
          <button type="submit">Create Beer</button>
        </form>
      </div>
    </div>
  );
}

export default AddBeerPage;
