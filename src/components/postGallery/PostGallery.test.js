import { render, screen } from '@testing-library/react';
import PostGallery from './PostGallery';

const renderPostGallery = (title = 'test title', imageUrls = []) => {
    render(<PostGallery title={title} images={imageUrls} />);
};

test('title is visible', () => {
   renderPostGallery();
   
   const title = screen.getByRole('heading', {
    name: /test title/i
   });

   expect(title).toBeInTheDocument();
});
test('renders 2 images when passed 2 urls ', () => {
    renderPostGallery(undefined, ['url1.com', 'url2.com']);

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(2);
});