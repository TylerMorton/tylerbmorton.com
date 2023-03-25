import React from 'react';


// Mui Joy Imports
import { Box, Sheet, Typography } from '@mui/joy'
import Image from 'next/image';
import ListTitle from './ListTitle';

interface Props {
  title: string
  icon: React.ReactElement | undefined
}

const Construction = ({ title, icon }: Props) => {
  return (
    <Box
      component='main'
      sx={(theme) => ({
        px: {
          xs: 4,
          md: 12,
          lg: 30,
        },
        py: { xs: `calc(${theme.spacing(0)} + var(--Header-height))` },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        height: '100dvh',
        overflowY: 'auto',
        gap: 1,
      })
      }
    >
      <ListTitle icon={icon} text={title} />
      <Box sx={{
        minHeight: '500px',
      }}>
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
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2,}}>
            <Typography level='h5' component='h4' textAlign={'center'}>
              🚧
            </Typography>
            <Typography level='h5' component='h4' textAlign={'center'}>
              This page is under construction.
            </Typography>
            <Typography level='h5' component='h4' textAlign={'center'}>
              🚧
            </Typography>
            </Box>
            <Box sx={{ m: 5, p: 2, position: 'relative', overflow: 'hidden' }} height='300px'>
              <Image
                src="https://media.tenor.com/jLsO-lqGCk0AAAAC/construction-worker.gif"
                alt="construction gif"
                fill
                object-fit="cover"
              />
            </Box>
          </Sheet>
        </Box>
      </Box>
    </Box>
  )
}

export default Construction;