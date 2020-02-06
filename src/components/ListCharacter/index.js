import React,{ useEffect, useState } from 'react'
import { Icon, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core"

function ListCharacter ( { characters } ) {

  const [showList, setShowList] = useState(false)

  function changeShow () {
    setShowList(showList ? false : true)
  }
  
  return (
    <>
      <div className="title-list">
        <h2>List of Character</h2>
        <button type="button" onClick={changeShow}>
          <Icon className="icon-keyboard">
            {showList ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          </Icon>
        </button>
      </div>
      <div className="list-result-char" style={{ display: showList ? 'block' : 'none' }}>
        <List className="list">
            {characters.map(char => (
              <ListItem button key={`char-${char.mal_id}`}>
                <ListItemAvatar>
                  <Avatar alt={char.name} src={char.image_url} />
                </ListItemAvatar>
                <ListItemText primary={char.name} />
              </ListItem>
            ))}
          </List>
      </div>
    </>
  )
}

export default ListCharacter