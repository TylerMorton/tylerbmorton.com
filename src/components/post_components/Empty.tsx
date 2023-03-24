
// Mui Joy Imports
import { Box, Sheet, Typography } from '@mui/joy'
import Image from 'next/image';

const Empty = () => {
  return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Sheet
        sx={{
          backgroundColor: 'transparent',
          width: '100',
          mx: 'auto',
          my: 1,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography level='h4' component='h4'>
          Nothing posted yet! Keep your eyes out for posts in the future.
        </Typography>
        <Box sx={{m: 10, p: 2, position: 'relative', overflow: 'hidden'}} height='300px'>
        <Image 
        src="https://media.tenor.com/K_pqwjmutJ0AAAAC/empty-roll.gif"
        alt="gif of tumbleweed"
        fill
        object-fit="cover"
        />
        </Box>
      </Sheet>
    </Box>
  );
}

export default Empty