import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom"

function Home1() {

  return (
    <><div className="App">
      <header className="App-header">
        <h1>The greatest e-commerce ever</h1>
      </header>
    </div>
    <div>
        <Link to="/Home">Home</Link>
    </div>
    <div>
        <Link to="/ProductDetail">Product Detail</Link>
    </div>
    <div>
        <Link to="/About">About</Link>
    </div>
    </>
  );
}

export default Home1;