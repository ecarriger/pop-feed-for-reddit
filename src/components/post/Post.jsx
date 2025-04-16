import { useSelector } from "react-redux";
import { selectPost } from "../../features/posts/postsSlice";
import CounterChips from "../counterChips/CounterChips";
import { Card } from "@mui/material";
import PostTitle from "../postTitle/PostTitle";


const Post = ({postId}) => {

    const post = useSelector(selectPost(postId));

    return (
        <Card>
            <PostTitle title={post.title} />
        </Card>
    );
};

export default Post;