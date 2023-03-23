import React from 'react';
import {Box, Sheet, Typography } from '@mui/joy';

interface Props {
  text: string
}

export default function PostTitle({text}: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Sheet
      sx={{
        backgroundColor: 'transparent',
        width: '100%',
        mx: 'auto',
        mt: 10,
        mb: 2,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
      }}
    >
      <Typography level='h2' component='h4' textAlign={'center'}>
        {text}
      </Typography>
    </Sheet>
  </Box>
  )
}
