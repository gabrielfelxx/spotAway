import "./style.scss";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Card from "../cards/index";

export default function Emphasis() {
  const cards = [
    { id: 1,
      img: '../../public/card1.png',
      place: "São Miguel",
      subtitle: "São miguel aos olhos dos moradores",
      price: "R$ 18.000,000",
      bathrooms: 7,
      cap: 6,
      size: "526m²",
    },
    { id: 2,
      img: '../../public/card2.png',
      place: "Uruburetama",
      subtitle: "Uruburetama aos olhos dos urubus",
      price: "R$ 85.000,000",
      bathrooms: "None",
      cap: "None",
      size: "None",
    },
    { id: 3,
      img: '../../public/card3.png',
      place: "Frade",
      subtitle: "Frade aos olhos dos cegos",
      price: "R$ 47.650,000",
      bathrooms: 4,
      cap: 4,
      size: "256m²",
    },
  ];

  return (
    <div className="empContainer">
      <div className="empBlock">
        <div className="empText">
          <h2 className="empTitle">Main places</h2>
          <h4 className="empSubtitle">To enjoy, experience and dream</h4>
        </div>
        <div className="arrowDiv">
          <ArrowCircleRightIcon className="arrow" />
        </div>
      </div>

      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
