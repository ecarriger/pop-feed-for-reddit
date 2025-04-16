import PostPreview from "../postPreview/PostPreview";
import Container from '@mui/material/Container';

const PostPreviewList = ({posts}) => {

    return (
        <>
            <h2>PostPreviewList</h2>
            <Container 
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    padding: '1rem'
                }}
            >
                {Object.keys(posts).map(key => <PostPreview key={key} postId={key} />)}
            </Container>
        </>
    )
}

export default PostPreviewList;