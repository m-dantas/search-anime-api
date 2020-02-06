import React, { useEffect, useState } from 'react'
import { Chip, Icon, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core"

import ChipCustom from '../../components/Chip'
import ListEpisode from '../../components/ListEpisode'
import ListCharacter from '../../components/ListCharacter'
import Api from '../../services/api'
import './style.css'

function Anime (props) {
  const { id } = props.match.params

  const [anime, setAnime] = useState([])
  const [genres, setGenres] = useState([])
  const [aired, setAired] = useState('')
  const [studios, setStudios] = useState([])
  const [producers, setProducers] = useState([])
  const [licensors, setLicensors] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [characters, setCharacters] = useState([])  
  
  useEffect(() => {
    
    async function loadAnime () {

      const res_details = await Api.detailsAnime(id)
      const res_ep = await Api.episodesAnime(id)
      const res_char = await Api.charactersAnime(id)

      setAnime(res_details.data)
      setGenres(res_details.data.genres)
      setProducers(res_details.data.producers)
      setStudios(res_details.data.studios)
      setLicensors(res_details.data.licensors)   
      setAired(res_details.data.aired.string)  
      setEpisodes(res_ep.data.episodes)
      setCharacters(res_char.data.characters)
    }

    loadAnime()

  }, [id])

  return (
    <>
      <div id="anime">
        <div className="content-custom base-info">
          <div className="banner">
            <img src={`${anime.image_url}`} alt={`${anime.title}`} />
          </div>
          <div className="infos">
            <div className="title">
              <h1>{anime.title}</h1>
              <h2>({anime.title_japanese})</h2>             
            </div>
            <div className="tecnical-infos">
              <ul>
                <li className="aired">
                  Aired:
                  <Chip size="small" label={aired} className="airedColor" />  
                </li>
                <ChipCustom items={genres} title="Genre" classPrimary="genres" classSecondary="genresColor" keyChip="genre" />
                <ChipCustom items={producers} title="Producer" classPrimary="producers" classSecondary="producersColor" keyChip="producer" />
                <ChipCustom items={studios} title="Studio" classPrimary="studios" classSecondary="studiosColor" keyChip="studio" />
                <ChipCustom items={licensors} title="Licensor" classPrimary="licensors" classSecondary="licensorsColor" keyChip="licensor" />          
              </ul>
            </div>
          </div>
        </div>

        <div className="content-custom">
          <div className="synopsis">
            <h2>Synopsis</h2>
            <div className="text-synopsis">
              <p>{anime.synopsis}</p>
            </div>
          </div>
        </div>

        <div className="content-custom list-episodio">
          <ListEpisode episodes={episodes} />
        </div>

        <div className="content-custom list-character">
          <ListCharacter characters={characters} />
        </div>

      </div>     
    </>
  )
}

export default Anime
