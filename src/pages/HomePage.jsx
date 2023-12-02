import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="links">
      <div className="link-card">
        <Link to="/beers">
          <img src="src\assets\beers.png" alt="" />
          <h1>All Beers</h1>
          <p>text</p>
          </Link>
      </div>
      <div className="link-card">
        <Link to="/random-beer">
          <img src="src\assets\random-beer.png" alt="" />
          <h1>Random Beer</h1>
          <p>Text</p>
          </Link>
      </div>
      <div className="link-card">
        <Link to="/new-beer">
          <img src="src\assets\new-beer.png" alt="" />
          <h1>New Beer</h1>
          <p>text</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
