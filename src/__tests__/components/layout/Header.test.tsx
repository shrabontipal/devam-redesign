import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Header from '../../../components/layout/Header';

describe('Header Component', () => {
  it('renders logo and company name', () => {
    render(<Header />);
    
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('Devam Computech')).toBeInTheDocument();
    expect(screen.getByText('Empowering Skills, Building Futures')).toBeInTheDocument();
  });
  
  it('renders navigation links', () => {
    render(<Header />);
    
    expect(screen.getByTestId('nav-home')).toBeInTheDocument();
    expect(screen.getByTestId('nav-about')).toBeInTheDocument();
    expect(screen.getByTestId('nav-courses')).toBeInTheDocument();
    expect(screen.getByTestId('nav-blog')).toBeInTheDocument();
    expect(screen.getByTestId('nav-contact')).toBeInTheDocument();
  });
  
  it('renders Get Started button', () => {
    render(<Header />);
    
    expect(screen.getByTestId('get-started-btn')).toBeInTheDocument();
  });
  
  it('highlights active link based on current location', () => {
    render(<Header />);
    
    const homeLink = screen.getByTestId('nav-home');
    expect(homeLink).toHaveClass('text-blue-600');
    
    const aboutLink = screen.getByTestId('nav-about');
    expect(aboutLink).not.toHaveClass('text-blue-600');
  });
});
