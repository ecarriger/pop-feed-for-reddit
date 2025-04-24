import { render, screen } from '@testing-library/react';

import App from './App';

test('renders title', () => {
    render(<App />);
    
    const title = screen.getByRole('heading', {
        name: /pop feed for reddit/i
    });

    expect(title).toBeInTheDocument();
});