import api from './http'

export default {
  searchApi: (type, string, page) => {
    return api.get(`/search/${type}?q=${string}&limit=16&page=${page}`)
  },
  detailsAnime: (id) => {
    return api.get(`/anime/${id}`)
  },
  episodesAnime: (id, page = 1) => {
    return api.get(`/anime/${id}/episodes/${page}`)
  },
  charactersAnime: (id) => {
    return api.get(`/anime/${id}/characters_staff`)
  }
}
