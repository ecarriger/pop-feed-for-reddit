import { render, screen } from '@testing-library/react';
import PostSelfText from './PostSelfText';

const renderPostSelfText = (title = 'Test title', selfText = 'Test text') => {
    render(<PostSelfText title={title} selfText={selfText} />);
};

test('renders title and text', () => {
    renderPostSelfText();

    const title = screen.getByRole('heading', {
        name: /test title/i
    });
    const text = screen.getByText(/test text/i);

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
});