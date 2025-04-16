import { render, screen } from '@testing-library/react';
import PostVideo from './PostVideo';

const renderPostVideo = (title = 'test title', videoUrl = 'https://test-image-url.mp4') => {
    render(<PostVideo title={title} videoUrl={videoUrl} />);
}

test('renders title and link', () => {
    renderPostVideo();

    const title = screen.getByRole('heading', {
        name: /test title/i
    });

    expect(title).toBeInTheDocument();
});
test('video renders', () => {
    renderPostVideo();

    const video = document.querySelector('video');

    expect(video).toBeInTheDocument();
});