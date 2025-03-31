import { screen, render } from '@testing-library/react';
import PostPreview from './PostPreview';
import { renderWithProviders } from '../../utilities/testUtils';



const renderPostPreview = (postId) => {
    const preloadedState = {
        posts: {
            allPosts: {
                abc123: {
                    id: 'abc123',
                    title: 'Test abc123 heading',
                    subreddit: 'testsub',
                    preview: {
                        images: ['mockurl']
                    }
                },
                xyz789: {
                    id: 'xyz789',
                    title: 'Test xyz789 heading',
                    subreddit: 'testsub'
                }
            }
        }
    };
    renderWithProviders(<PostPreview postId={postId} />, {preloadedState: preloadedState});
};

test('post elements render', () => {
    renderPostPreview('abc123');

    const postTitle = screen.getByRole('heading', {
        name: /abc123 heading/i
    });
    const subReddit = screen.getByRole('heading', {
        name: /testsub/i
    });
    const chips = document.querySelector('.creditContainer');
    const previewImg = screen.getByAltText(/testsub/i);

    expect(postTitle).toBeInTheDocument();
    expect(subReddit).toBeInTheDocument();
    expect(chips).toBeInTheDocument();
    expect(previewImg).toBeInTheDocument();
});
test('no image renders if post data does not contain preview key', () => {
    renderPostPreview('xyz789');

    const previewImg = screen.queryByAltText(/testsub/i);

    expect(previewImg).not.toBeInTheDocument();
});