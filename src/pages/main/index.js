import React, { useState } from 'react'
import { Container, TextField, Radio,RadioGroup, Button, ThemeProvider, 
  FormControlLabel, FormControl, FormLabel } from "@material-ui/core"
import CardCustom from '../../components/CardCustom'
import Api from '../../services/api'
import theme from '../../utils/ThemeCustom'
import logo from '../../img/search.png'
import loadingGif from '../../img/loading.gif'
import './style.css'

function Main () {
  const [searchText, setSearchText] = useState('')
  const [searchOption, setSearchOption] = useState('')
  const [animes, setAnimes] = useState([])
  const [page, setPage] = useState(1)

  const [loading, setLoading] = useState(false)
  
  async function handleSearch (e) {
    e.preventDefault()
    setLoading(true)

    if (animes.length > 0) { setAnimes([]) }

    window.location.href="#loading"
    const response = await Api.searchApi(searchOption, searchText, page)

    setTimeout(() => {
      setLoading(false)
      setAnimes(response.data.results)
    }, 3000);
  }

  async function pagination () {
    const nextPage = page + 1

    setLoading(true)
    window.location.href="#loading"
    const response = await Api.searchApi(searchOption, searchText, nextPage)
    
    setTimeout(() => {
      setLoading(false)
      setAnimes([...animes, ...response.data.results])
      setPage(nextPage)
    }, 3000);
  }

  return (
    <>
      <Container maxWidth="xs">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <form onSubmit={handleSearch}>
          <ThemeProvider theme={theme}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="search"
              label="Search"
              name="search"
              color="primary"
              autoFocus
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <FormControl component="fieldset" className="fieldset-radio">
              <FormLabel component="legend">Select type search</FormLabel>
                <RadioGroup className="radiogroup-custom force-color" name="type">
                  <FormControlLabel
                    value="anime"
                    control={<Radio color="primary" />}
                    label="Anime"
                    onChange={e => setSearchOption(e.target.value)}
                  />
                  <FormControlLabel
                    value="manga"
                    control={<Radio color="primary" />}
                    label="Mangá"
                    onChange={e => setSearchOption(e.target.value)}
                  />
                </RadioGroup>
            </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >Search</Button>
          </ThemeProvider>
        </form>
      </Container>
      <div className="content-main">
        <div className="search-result">
          {animes.map(anime => (
            <CardCustom key={anime.mal_id} anime={anime} />
            ))}
        </div>
        { animes.length > 0 &&
          <a href="#loading" className="load-more" onClick={pagination}>LOAD MORE</a>
        }
        
        <div id="loading">
        { loading === true &&
          <img src={loadingGif} className="loading" alt="loading" />
        }
        </div>
      </div>
    </>
  )
}

export default Main
