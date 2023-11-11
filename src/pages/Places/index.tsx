import './style.scss'
import Card from '../HomePage/components/cards'
import { cards } from '../HomePage/components/emphasis/'

export default function Places() {
  return (
    <div>
        <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
        </div>
    </div>
  )
}
