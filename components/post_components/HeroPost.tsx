//import DateFormatter from './date-formatter'
//import CoverImage from './cover-image'
import type Author from '../../types/Author'
import { Box, Sheet, Typography } from '@mui/joy'
import Image from 'next/image'

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
  console.log(coverImage);
  return (
    <Sheet variant='outlined' sx={{display: 'flex',
    alignItems:'center',
    borderRadius: '25px',
    overflow: 'hidden',
    maxWidth: '800px',
    flexDirection: 'column',
     }}>
      <Box sx={{mb: 2, overflow: 'hidden', position: 'relative'}}>
        <Image 
          src={coverImage}
          alt={`coverImage-${slug}`}
          width={1300}
          height={630}
        />
        {/*<CoverImage title={title} src={coverImage} slug={slug} />*/}
      </Box>
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