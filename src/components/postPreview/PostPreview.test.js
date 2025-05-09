import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
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
                    },
                    ups: 579,
                    domain: ''
                },
                xyz789: {
                    id: 'xyz789',
                    title: 'Test xyz789 heading',
                    subreddit: 'testsub',
                    domain: ''
                }
            }
        }
    };
    renderWithProviders(<MemoryRouter><PostPreview postId={postId} /></MemoryRouter>, {preloadedState: preloadedState});
};

test('post elements render', () => {
    renderPostPreview('abc123');

    const postTitle = screen.getByRole('heading', {
        name: /abc123 heading/i
    });
    const subReddit = screen.getByText(/testsub/i);
    const chips = screen.getByText('579');
    const previewImg = screen.getByAltText(/testsub/i);

    expect(postTitle).toBeInTheDocument();
    expect(subReddit).toBeInTheDocument();
    expect(chips).toBeInTheDocument();
    expect(previewImg).toBeInTheDocument();
});