import React from 'react';
import { Link as MuiLink, Typography } from '@mui/joy';
import Link from 'next/link';


function Copyright() {
  return(
    <>
    <Typography  level='body1' component='p' textAlign={'center'}>
      {`Copyright © `}
      <MuiLink component={Link} href="mailto:tbmorton@ucsc.edu" passHref={true}>
        Tyler Morton
      </MuiLink>
      {` ${new Date().getFullYear()}.`}
    </Typography>
    </>
  );
}

export default Copyright;