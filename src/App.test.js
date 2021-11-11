import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading message', () => {
    render(<App />);
    const divElement = screen.getByText('loading');
    expect(divElement).toBeInTheDocument();
});
