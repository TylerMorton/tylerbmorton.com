import React from 'react';

import { Box, Sheet } from '@mui/joy';

import Image from 'next/image';

function MyImage() {
  return (
    <Sheet
      sx={{
        alignItems: 'center',
        width: '100',
        mx: 'auto',
        my: 1,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
      }}
    >
      <Box 
      height={200} 
      width={200} 
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
      }}>
        <Image
          src='https://source.unsplash.com/random?portrait'
          alt='Picture of me.'
          fill
          object-fit='contain'
        />
      </Box>
    </Sheet>
  );
}
export default MyImage;


/*

*/