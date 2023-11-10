import './styles.scss'

export default function Card(props) {
  const { img, place, subtitle, price } = props;

  return (
    <div className='cardContainer'>
      <div className='imageCardDiv'>
        <img src={img} alt={place} className='imageCard' />
      </div>
      <div className='infoDiv'>
        <h2 className='placeInfo'>{place}</h2>
        <h4 className='subtitleInfo'>{subtitle}</h4>
        <h2 className='priceInfo'>{price}</h2>
      </div>
    </div>
  )
}


