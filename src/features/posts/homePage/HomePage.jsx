import { useTransition, ViewTransition } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addPost, deleteAllPosts, selectAllPosts } from "../postsSlice";
import { loadRedditData, loadMockRedditData } from "../../../utilities/redditApi";
import CategoryPicker from "../../../components/categoryPicker/CategoryPicker";
import PostPreviewList from "../../../components/postPreviewList/PostPreviewList";
import { Fade, Button } from "@mui/material";

const HomePage = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);

    const [ isPending, startTransition ] = useTransition();

    const loadPosts = async () => {
        startTransition(async () => {
            const data = await loadRedditData();
            dispatch(deleteAllPosts());
            data.forEach( post => {
                dispatch(addPost(post));
            });
        });
    }
    const loadMockPosts = async () => {
        startTransition(async () => {
            const data = await loadMockRedditData();
            dispatch(deleteAllPosts());
            data.forEach( post => {
                dispatch(addPost(post));
            });
        });
    }

    return(
        <>
            <h2>HomePage</h2>
            <CategoryPicker />
            <Button onClick={loadPosts} >Load Live Posts</Button>
            <Button onClick={loadMockPosts} >Load Mock Posts</Button>
            { isPending ? <Fade in={isPending}><p>Loading...</p></Fade> : <PostPreviewList posts={posts} /> }
        </>
    );
}
export default HomePage;