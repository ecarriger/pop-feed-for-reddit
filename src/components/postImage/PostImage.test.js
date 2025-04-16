import { render, screen } from '@testing-library/react';
import PostImage from './PostImage';

const renderPostImage = (title = 'test title', imgUrl = 'https://test-image-url.png', alt = 'test alt') => {
    render(<PostImage title={title} imgUrl={imgUrl} alt={alt} />);
}

test('renders title and link', () => {
    renderPostImage();

    const title = screen.getByRole('heading', {
        name: /test title/i
    });

    expect(title).toBeInTheDocument();
});
test('image and alt render', () => {
    renderPostImage();

    const image = screen.getByRole('img', {
        name: /test alt/i
    });

    expect(image).toBeInTheDocument();
});