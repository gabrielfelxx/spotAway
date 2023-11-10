import './styles.scss'

function Card(props) {
  const { img, place, subtitle, price, bathrooms, cap, size } = props;

  return (
    <div className='cardContainer'>
        <div className='imageCardDiv'>
            <img src={img} alt={place} className='imageCard'/>
        </div>
        <div className='infoDiv'>
            <h2 className='placeInfo'>{place}</h2>
            <h4 className='subtitleInfo'>{subtitle}</h4>
            <h2 className='priceInfo'>{price}</h2>
        </div>
        <div className="subInfoDiv">
          <div className="info">
            <span className='topText'>Bathrooms:</span>
            <span className='bottomText'>{bathrooms}</span>
          </div>
          <div className="info">
            <span className='topText'>Cap:</span>
            <span className='bottomText'>{cap}</span>
          </div>
          <div className="info">
            <span className='topText'>Size:</span>
            <span className='bottomText'>{size}</span>
          </div>
        </div>
    </div>
  )
};

export default Card;
