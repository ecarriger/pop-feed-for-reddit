import { render, screen } from '@testing-library/react';
import PostGallery from './PostGallery';

const renderPostGallery = (title = 'test title', imageUrls = [], alt = 'test alt') => {
    render(<PostGallery title={title} imageUrls={imageUrls} alt={alt} />);
};

test('title is visible', () => {
   renderPostGallery();
   
   const title = screen.getByRole('heading', {
    name: /test title/i
   });

   expect(title).toBeInTheDocument();
});
test('renders 1 images when passed 2 urls ', () => {
    renderPostGallery(undefined, ['url1.com', 'url2.com'], undefined);

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(1);
});