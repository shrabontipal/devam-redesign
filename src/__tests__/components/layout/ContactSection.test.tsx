import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import ContactSection from '../../../components/layout/ContactSection';

beforeEach(() => {
  vi.clearAllMocks();
});

describe('ContactSection Component', () => {
  it('renders contact information correctly', () => {
    render(<ContactSection />);
    
    expect(screen.getByText('Get in')).toBeInTheDocument();
    expect(screen.getByText('Touch')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('devamco@gmail.com')).toBeInTheDocument();
  });
  
  it('renders form fields correctly', () => {
    render(<ContactSection />);
    
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });
  
  it.skip('validates required fields', async () => {
  });
  
  it.skip('validates email format', async () => {
  });
  
  it.skip('submits form successfully', async () => {
  });
});
