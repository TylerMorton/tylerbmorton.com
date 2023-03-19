import React from 'react';
import { Link, Typography } from '@mui/joy';


function Copyright() {
  return(
    <>
    <Typography  level='body1' component='p' textAlign={'center'}>
      {`Copyright © `}
      <Link href="link">
        Tyler Morton
      </Link>
      {` ${new Date().getFullYear()}.`}
    </Typography>
    </>
  );
}

export default Copyright;