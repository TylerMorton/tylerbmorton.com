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
      <IconButton component={Link} href="https://github.com/TylerMorton" passHref={true}>
        <GitHub />
      </IconButton>
      <IconButton component={Link} href="https://www.linkedin.com/in/tyler-b-morton/" passHref={true}>
        <Linkedin />
      </IconButton>
      <IconButton component={Link} href="/resume" >
        <FileText />
      </IconButton>
    </Box>
  );
}

