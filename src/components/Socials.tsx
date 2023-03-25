import { Box, IconButton } from '@mui/joy';
import React from 'react'
import { GitHub, Linkedin, FileText } from 'react-feather';
import Link from 'next/link';

export default function Socials() {

  return(
    <Box sx={{
      display: 'flex',
      gap: '7px',
    }}>
      <IconButton 
        aria-label='my github'
        color='neutral'
        sx={{"&:hover": {color: '#58ab5a'}}}
        variant='outlined' component={Link}
        href="https://github.com/TylerMorton"
        passHref={true}>
        <GitHub />
      </IconButton>
      <IconButton 
        aria-label='my linkedin'
      color='neutral'
      sx={{"&:hover": {color: '#0a66c2'}}}
      variant='outlined'
      component={Link}
      href="https://www.linkedin.com/in/tyler-b-morton/" passHref={true}>
        <Linkedin />
      </IconButton>
      <IconButton 
        aria-label='my resume'
      color='neutral'
      sx={{"&:hover": {color: 'pink'}}}
      variant='outlined'
      component={Link}
      href="/resume" >
        <FileText />
      </IconButton>
    </Box>
  );
}

