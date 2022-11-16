import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import AppPage from './AppPage';

describe('AppPage test', () => {
  it('should render with title', () => {
    render(<AppPage />);

    const findText = screen.getByText(/App Page/i);
    screen.debug(findText);
    expect(findText).toBeInTheDocument();
  });

  it('should alert message when hello on click', async () => {
    render(<AppPage />);

    const button = screen.getByRole('button');
    screen.debug(button);
    userEvent.click(button);

    const findText = await screen.findByText(/hello/i);
    screen.debug(findText);
    expect(findText).toBeInTheDocument();
  });
});
