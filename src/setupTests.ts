import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('framer-motion', () => {
  const React = require('react');
  
  type ComponentProps = {
    children?: React.ReactNode;
    [key: string]: any;
  };
  
  return {
    AnimatePresence: ({ children }: { children?: React.ReactNode }) => 
      React.createElement(React.Fragment, null, children),
    motion: {
      div: ({ children, ...props }: ComponentProps) => 
        React.createElement('div', props, children),
      section: ({ children, ...props }: ComponentProps) => 
        React.createElement('section', props, children),
      span: ({ children, ...props }: ComponentProps) => 
        React.createElement('span', props, children),
      h1: ({ children, ...props }: ComponentProps) => 
        React.createElement('h1', props, children),
      h2: ({ children, ...props }: ComponentProps) => 
        React.createElement('h2', props, children),
      h3: ({ children, ...props }: ComponentProps) => 
        React.createElement('h3', props, children),
      p: ({ children, ...props }: ComponentProps) => 
        React.createElement('p', props, children),
      img: (props: Record<string, any>) => 
        React.createElement('img', props),
      button: ({ children, ...props }: ComponentProps) => 
        React.createElement('button', props, children),
      a: ({ children, ...props }: ComponentProps) => 
        React.createElement('a', props, children),
      ul: ({ children, ...props }: ComponentProps) => 
        React.createElement('ul', props, children),
      li: ({ children, ...props }: ComponentProps) => 
        React.createElement('li', props, children),
    }
  };
});

vi.mock('react-router-dom', () => {
  const React = require('react');
  
  type RouterProps = {
    children?: React.ReactNode;
    initialEntries?: string[];
    [key: string]: any;
  };
  
  type LinkProps = {
    children?: React.ReactNode;
    to: string;
    [key: string]: any;
  };
  
  type RouteProps = {
    path?: string;
    element?: React.ReactNode;
    [key: string]: any;
  };
  
  const Routes = ({ children, location }: { children?: React.ReactNode, location?: { pathname: string } }) => {
    if (!React.Children.count(children)) {
      return null;
    }
    
    const currentPath = location?.pathname || '/';
    
    let element = null;
    React.Children.forEach(children, (child: any) => {
      if (child?.props?.path === currentPath) {
        element = child?.props?.element;
      }
    });
    
    return element;
  };
  
  return {
    BrowserRouter: ({ children }: RouterProps) => 
      React.createElement(React.Fragment, null, children),
    MemoryRouter: ({ children, initialEntries = ['/'] }: RouterProps) => 
      React.createElement(React.Fragment, null, children),
    useLocation: vi.fn().mockReturnValue({ pathname: '/' }),
    useNavigate: vi.fn(),
    Link: ({ children, to, ...props }: LinkProps) => 
      React.createElement('a', { href: to, ...props }, children),
    Routes,
    Route: ({ path, element }: RouteProps) => 
      React.createElement('div', { 'data-path': path }, element),
  };
});

vi.mock('@emailjs/browser', () => ({
  send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
}));

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  },
  Toaster: ({ position }: { position?: string }) => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'sonner-toaster', 'data-position': position });
  }
}));
