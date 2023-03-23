import React from 'react';

import { Box, Sheet, Typography } from '@mui/joy';
import FadeInEffect from '../FadeInEffect';

interface Props {
  text: string
  icon: React.ReactElement | undefined
}


export default function ListTitle({icon, text}: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Sheet
        sx={{
          backgroundColor: 'transparent',
          width: '100%',
          mx: 'auto',
          mt: 10,
          mb: 2,
          px: 2,
          py: 3,
          display: 'flex',
          gap: 2,
          borderRadius: 'sm',
          justifyContent: 'center'
        }}
      >
        <Typography level='h2' component='h4' sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          textJustify: 'center',
          }}>
          {text}
        </Typography>
        {icon ?
        (<Box sx={{display: 'inline-block'}}><FadeInEffect>
          {icon}
        </FadeInEffect></Box>)
        :
          <></>
        }
      </Sheet>
    </Box>
  );
}


