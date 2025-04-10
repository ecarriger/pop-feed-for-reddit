import { render, screen } from '@testing-library/react';
import PostTitle from './PostTitle';

const renderPostTitle = (title = 'test title') => {
    render(<PostTitle title={title} />);
};

test('title is visible', () => {
    renderPostTitle();
    
    const title = screen.getByRole('heading', {
        name: /test title/i
    });

    expect(title).toBeInTheDocument();
});