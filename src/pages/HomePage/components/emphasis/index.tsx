import "./style.scss";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Card from "../cards/index";
import { Link } from "react-router-dom";

export default function Emphasis() {
  const cards = [
    {
      id: 1,
      img: "../../public/card1.png",
      place: "São Miguel",
      subtitle: "São miguel aos olhos dos moradores",
      price: "R$ 18.000,000",
      bathrooms: 7,
      cap: 6,
      size: "526m²",
    },
    {
      id: 2,
      img: "../../public/card2.png",
      place: "Uruburetama",
      subtitle: "Uruburetama aos olhos dos urubus",
      price: "R$ 85.000,000",
      bathrooms: "None",
      cap: "None",
      size: "None",
    },
    {
      id: 3,
      img: "../../public/card3.png",
      place: "Frade",
      subtitle: "Frade aos olhos dos cegos",
      price: "R$ 47.650,000",
      bathrooms: 4,
      cap: 4,
      size: "256m²",
    },
    {
      id: 4,
      img: "https://casacor.abril.com.br/wp-content/uploads/sites/7/2021/10/Casa_de_praia_VictorEleuterio_0004baixa.jpg?resize=1024,682",
      place: "UFC",
      subtitle: "Sala de estudos na UFC",
      price: "R$ 2.930,500",
      bathrooms: "None",
      cap: 4,
      size: "None",
    },
    {
      id: 5,
      img: "https://www.tuacasa.com.br/wp-content/uploads/2022/09/casa-de-praia-00.jpg",
      place: "Centro",
      subtitle: "Rua da cinza",
      price: "R$ 91.680,000",
      bathrooms: 2,
      cap: 1,
      size: "585m²",
    },
    {
      id: 6,
      img: "https://img.quizur.com/f/img5ee2e1fcac7033.61155136.jpg?lastEdited=1591928958",
      place: "Minecraft",
      subtitle: "Casa do Jazzghost",
      price: "R$ 65.590,200",
      bathrooms: 2,
      cap: 34,
      size: "999m²",
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
          <Link to="/places">
            <ArrowCircleRightIcon className="arrow" />
          </Link>
        </div>
      </div>

      <div className="cards scroll-left">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
