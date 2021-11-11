import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading message', () => {
    render(<App />);
    const linkElement = screen.getByText('loading');
    expect(linkElement).toBeInTheDocument();
});
