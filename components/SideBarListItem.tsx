import React, { ReactElement } from 'react';
import { ListItem, ListItemButton, ListItemDecorator, ListItemContent } from '@mui/joy';

interface Props {
  icon: ReactElement,
  text: string,
  onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined
}


export default function SideBarListItem({icon, text, onClick}: Props) {
  return (
    <ListItem>
      <ListItemButton onClick={onClick}>
        <ListItemDecorator>
          {icon}
        </ListItemDecorator>
        <ListItemContent>{text}</ListItemContent>
      </ListItemButton>
    </ListItem>

  )
}