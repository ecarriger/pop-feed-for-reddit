import { useParams, useNavigate } from "react-router";
import PostPreview from "../../../components/postPreview/PostPreview";
import CommentsSection from "../../comments/Comments";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";


const PostPage = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    
    const handleBackClick = () => {
        navigate(-1);
    }

    return(
        <>
            <IconButton onClick={handleBackClick}>
                <ArrowBack>Back</ArrowBack>
            </IconButton>
            <PostPreview postId={postId} />
        </>
    );
}
export default PostPage;