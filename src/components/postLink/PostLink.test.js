import { render, screen } from '@testing-library/react';
import PostLink from './PostLink';

const renderPostLink = (title = 'test title', linkUrl = 'https://test-link-url', imgUrl = 'https://test-image-url.png', alt = 'test alt') => {
    render(<PostLink title={title} linkUrl={linkUrl} imgUrl={imgUrl} alt={alt} />);
}

test('renders title and link', () => {
    renderPostLink();

    const title = screen.getByRole('heading', {
        name: /test title/i
    });
    const link = screen.getByRole('link', {
        name: /test-link/i
    })

    expect(title).toBeInTheDocument();
    expect(link).toBeInTheDocument();
});
test('image and alt render', () => {
    renderPostLink();

    const image = screen.getByRole('img', {
        name: /test alt/i
    });

    expect(image).toBeInTheDocument();
});