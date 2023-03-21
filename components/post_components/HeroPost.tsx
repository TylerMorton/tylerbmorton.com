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
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {

  const handleClick = () => {
    Router.push(`${Router.pathname}/${slug}`);
  }

  return (
    <Sheet onClick={handleClick} variant='outlined' sx={{display: 'flex',
    alignItems:'center',
    borderRadius: '25px',
    overflow: 'hidden',
    maxWidth: '800px',
    flexDirection: 'column',
    px: 4,
    pt: 2,
     }}>
      <Box>
        <Sheet
            sx={{
              mx: 2,
              px: 3,
              py: 2,
            }}
          >
          <Typography level='h5'>
              {title}
          </Typography>
          <Box>
            <Typography>{date}</Typography>
            {/*<DateFormatter dateString={date} />*/}
          </Box>
        </Sheet>
        <Box>
          <Typography>
            {excerpt}
          </Typography>
          {/*<Avatar name={author.name} picture={author.picture} />*/}
        </Box>
      </Box>
    </Sheet>
  )
}

export default HeroPost