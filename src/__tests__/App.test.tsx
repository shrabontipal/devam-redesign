import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import App from '../App';

vi.mock('../pages/HomeView', () => ({
  default: () => <div data-testid="home-page">Home Page</div>,
}));

vi.mock('../pages/AboutView', () => ({
  default: () => <div data-testid="about-page">About Page</div>,
}));

vi.mock('../pages/CoursesView', () => ({
  default: () => <div data-testid="courses-page">Courses Page</div>,
}));

vi.mock('../pages/BlogView', () => ({
  default: () => <div data-testid="blog-page">Blog Page</div>,
}));

vi.mock('../pages/ContactView', () => ({
  default: () => <div data-testid="contact-page">Contact Page</div>,
}));

vi.mock('../components/layout/Header', () => ({
  default: () => <div data-testid="header">Header</div>,
}));

vi.mock('../components/layout/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

describe('App Component', () => {
  it('renders the app with header and footer', () => {
    render(<App />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
