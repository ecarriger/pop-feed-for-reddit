import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../features/posts/postsSlice';
import PostPreview from "../postPreview/PostPreview";

const PostPreviewList = () => {

    const posts = useSelector(selectAllPosts);

    return (
        <>
            <h2>PostPreviewList</h2>
            <ul>
                {Object.keys(posts).map(key => <PostPreview key={key} postId={key} />)}
            </ul>
        </>
    )
}

export default PostPreviewList;