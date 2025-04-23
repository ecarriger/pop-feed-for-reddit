import PostPreview from "../postPreview/PostPreview";
import Box from '@mui/material/Box';
import './PostPreviewList.css';

const PostPreviewList = ({posts}) => {

    return (
        <>
            <h2>PostPreviewList</h2>
            <Box 
                className='fade'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                }}
            >
                {Object.keys(posts).map(key => <PostPreview key={key} postId={key} />)}
            </Box>
        </>
    )
}

export default PostPreviewList;