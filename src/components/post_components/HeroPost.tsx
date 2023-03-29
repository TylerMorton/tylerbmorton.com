//import DateFormatter from './date-formatter'

// Mui Joy Imports
import { Box, Sheet, Typography } from '@mui/joy'

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

const readableDate = (str: string) => {
  const date = new Date(str);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

  return date.toLocaleDateString(undefined, options);
}

const HeroPost = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {

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
        <Typography>{readableDate(date)}</Typography>
        <Box width='100%'>
        <Typography level='body1' component='h1'>
        {excerpt} 
        </Typography>
        </Box>
      </Sheet>
    </Box>
  );
}

export default HeroPost