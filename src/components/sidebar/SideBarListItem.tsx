import React, { ReactElement } from 'react';
import { ListItem, ListItemButton, ListItemDecorator, ListItemContent } from '@mui/joy';

interface Props {
  icon: ReactElement,
  text: string,
  select: boolean,
  onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined
}


export default function SideBarListItem({icon, text, select, onClick}: Props) {
  return (
    <ListItem>
      <ListItemButton selected={select} onClick={onClick}>
        <ListItemDecorator>
          {icon}
        </ListItemDecorator>
        <ListItemContent>{text}</ListItemContent>
      </ListItemButton>
    </ListItem>

  )
}