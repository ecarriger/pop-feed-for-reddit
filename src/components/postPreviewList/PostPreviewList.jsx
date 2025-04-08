import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../features/posts/postsSlice';
import PostPreview from "../postPreview/PostPreview";
import Container from '@mui/material/Container';

const PostPreviewList = () => {

    const posts = useSelector(selectAllPosts);

    return (
        <>
            <h2>PostPreviewList</h2>
            <Container 
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    padding: '1rem'
                }}
            >
                {Object.keys(posts).map(key => <PostPreview key={key} postId={key} />)}
            </Container>
        </>
    )
}

export default PostPreviewList;