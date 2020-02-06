import React, { useState } from 'react'
import { Icon, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core"

function ListEpisode ({ episodes }) {

  const [showList, setShowList] = useState(false)

  function changeShow () {
    setShowList(showList ? false : true)
  }

  return (
    <>
      <div className="title-list">
        <h2>List of Episodes</h2>
        <button type="button" onClick={changeShow}>
          <Icon className="icon-keyboard">
            {showList ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          </Icon>
        </button>
      </div>
      <div className="list-result" style={{ display: showList ? 'block' : 'none' }}>
        <List className="list">
          {episodes.map((ep, i) => (
            <ListItem key={`ep-${ep.episode_id}`}>
              <ListItemAvatar>
                <Avatar>
                  {i+1}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={ep.title} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )
}

export default ListEpisode