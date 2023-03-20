
import { fireEvent, render, screen } from '@testing-library/react';

import { CssVarsProvider } from '@mui/joy/styles';

import * as index from '../pages/index';
import Index from '../pages/index';

const renderView = async () => {
  render(
    <CssVarsProvider defaultMode="system">
      <Index />
    </CssVarsProvider>
  )
}

describe('index', () => {
  it('page renders successfully', async () => {
    renderView();
    await screen.findByAltText('Picture of me.')
    screen.getByText('About me');
    screen.getByText('Inspiration for the site');
  });
})
