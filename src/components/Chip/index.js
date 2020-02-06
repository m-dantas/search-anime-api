import React from 'react'
import { Chip } from '@material-ui/core'
import './style.css'

function ChipCustom({ items, title, classPrimary, classSecondary, keyChip }) {
  return (
    <li className={classPrimary}>
      {title}(s):
        {items.map(item => (
          <Chip 
            size="small" 
            key={`${keyChip}-${item.mal_id}`} 
            label={item.name}
            className={classSecondary}
          />                        
        ))}
    </li>
  )
}

export default ChipCustom
