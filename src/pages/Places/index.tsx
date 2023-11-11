import "./style.scss";
import Header from "../../components/header";
import Card from "../HomePage/components/cards";
import { cards } from "../HomePage/components/emphasis/";

export default function Places() {
  return (
    <div className="placesContainer">
      <Header />
      <div className="placeCardsDiv">
        <div className="placeCards">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}