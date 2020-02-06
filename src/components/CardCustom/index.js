import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function CardCustom({ anime }) {

  function formatarString(string) {
    return string.length > 26 ? string.slice(0, 40) + "..." : string
  }

  return (    
    <div className="banner-item"
      style={ 
        { backgroundImage: `url(${anime.image_url})` }
      }>
        <div className="more-info">
          <Link to={`/anime/${anime.mal_id}`}>
          details
          </Link>
        </div>
        <div className="simple-infos">
          <div className="score-item">
            {anime.score}
          </div>
          <div className="name-item">
            <strong>
              {formatarString(anime.title)}
            </strong>
          </div>
        </div>
    </div>
  )
}

export default CardCustom
