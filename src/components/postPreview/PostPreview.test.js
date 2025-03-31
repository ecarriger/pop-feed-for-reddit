import { screen, render } from '@testing-library/react';
import PostPreview from './PostPreview';
import { renderWithProviders } from '../../utilities/testUtils';



const renderPostPreview = (postId) => {
    const preloadedState = {
        posts: {
            allPosts: {
                abc123: {
                    id: 'abc123',
                    title: 'Test'
                }
            }
        }
    };
    renderWithProviders(<PostPreview postId={postId} />, {preloadedState: preloadedState});
};

test('post title renders', () => {
    renderPostPreview('abc123');

    const postTitle = screen.getByRole('heading', {
        name: /test/i
    });

    expect(postTitle).toBeInTheDocument();
});