import * as React from 'react';

import {Moon, Sun} from 'react-feather';
import { useColorScheme } from '@mui/joy/styles';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';

export default function ColorSchemeToggle({
  sx,
  ...props
}: IconButtonProps) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <IconButton
        size="sm"
        variant="outlined"
        aria-label='toggle-mode'
        color="neutral"
        {...props}
        sx={sx}
        disabled
      />
    );
  }
  return (
    <IconButton
      id="toggle-mode"
      aria-label='toggle-mode'
      size="sm"
      variant="outlined"
      color="neutral"
      {...props}
      onClick={toggleMode}
      sx={[
        {
          '& > *:first-child': {
            display: mode === 'dark' ? 'none' : 'initial',
          },
          '& > *:last-child': {
            display: mode === 'light' ? 'none' : 'initial',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Moon />
      <Sun />
    </IconButton>
  );
}
