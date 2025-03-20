import { render, screen } from '@testing-library/react';

import App from './App';

test('First test', () => {
    render(<App />);
    
    const title = screen.getByRole('heading', {
        name: /react/i
    });

    expect(title).toBeInTheDocument();
});