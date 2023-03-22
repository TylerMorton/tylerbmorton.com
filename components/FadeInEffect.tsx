import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {fadeInDown} from 'react-animations';
import { Box } from '@mui/system';

const fadeAnimation = keyframes`${fadeInDown}`;


const BouncyDiv = styled.div`
    animation: 2s ${fadeAnimation};
`;

interface Props {
  height?: string | number,
  width?: string | number,
  children: ReactElement | ReactElement[]
}

export default function FadeInEffect({height, width, children}: Props) {
  const w = width ?? 'auto';
  const h = height ?? 'auto';

  return(
    <Box
    color='neutral'
    sx={{
      p: 2,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: '10%',
      border: '2px solid',
      borderColor: 'divider',
      height: h,
      width: w,
    }}
  >
    <BouncyDiv>
      {children}
    </BouncyDiv>
  </Box>
  )
}

