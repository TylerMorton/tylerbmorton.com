import React from 'react';
import { Typography } from "@mui/joy";

export default function Body({...child}) {
  return(
    <Typography {...child} />
  );
}
