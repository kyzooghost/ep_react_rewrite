import { render, screen } from '@testing-library/react';
import App from './App';

describe('App routing', () => {
  afterEach(() => {
    window.location.hash = '#/';
  });

  test('does not show a Team navigation link on the home page', () => {
    // Arrange
    window.location.hash = '#/';

    // Act
    render(<App />);

    // Assert
    expect(screen.getByText('Archive')).toBeInTheDocument();
    expect(screen.getByText('Podcast')).toBeInTheDocument();
    expect(screen.queryByText('Team')).not.toBeInTheDocument();
  });

  test('does not render the team page at the previous team route', () => {
    // Arrange
    window.location.hash = '#/team';

    // Act
    render(<App />);

    // Assert
    expect(screen.queryByText('About the Founder')).not.toBeInTheDocument();
  });
});
