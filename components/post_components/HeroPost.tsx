//import DateFormatter from './date-formatter'
//import CoverImage from './cover-image'

// Mui Joy Imports
import { Box, Sheet, Typography } from '@mui/joy'
import Image from 'next/image'

// Next Imports
import Router from 'next/router'

import type Author from '../../types/Author'


type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {

  console.log(excerpt)
  const handleClick = () => {
    Router.push(`${Router.pathname}/${slug}`);
  }
  return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Sheet
      onClick={handleClick}
        variant='outlined'
        sx={{
          width: '100',
          mx: 'auto',
          my: 1,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'lg',
        }}
      >
        <Typography level='h4' component='h4'>
          {title}
        </Typography>
        <Typography>{date}</Typography>
        <Typography level='body1' component='h1'>
        {excerpt} 
        </Typography>
      </Sheet>
    </Box>
  );
}

export default HeroPost