import "./style.scss";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="containerHero">
      <img src="../../hero-bg.svg" alt="test" className="heroImage" />

      <div className="textDiv">
        <h2 className="heroTitle">
          Interviews of the best options
          <br />
          destination for you
        </h2>
        <h4 className="heroSubtitle">
          reserve the coziest places
          <br /> for your weekend.
        </h4>
        <Link to="./places">
          <button className="heroButton">Start booking</button>
        </Link>
      </div>
    </div>
  );
}
