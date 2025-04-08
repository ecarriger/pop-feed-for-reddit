import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { addPost } from "../postsSlice";
import { loadRedditData, loadMockRedditData } from "../../../utilities/redditApi";
import CategoryPicker from "../../../components/categoryPicker/CategoryPicker";
import PostPreviewList from "../../../components/postPreviewList/PostPreviewList";

const HomePage = () => {

    const dispatch = useDispatch();
    const [ posts, setPosts ] = useState([]);
    useEffect(() => {
        posts.forEach( post => {
            dispatch(addPost(post));
        });
    }, [posts, dispatch])

    const loadPosts = async (e) => {
        e.preventDefault();
        const redditData = await loadRedditData();
        setPosts(redditData);
    }
    const loadMockPosts = async (e) => {
        e.preventDefault();
        const mockRedditData = await loadMockRedditData();
        setPosts(mockRedditData);
    }

    return(
        <>
            <h2>HomePage</h2>
            <CategoryPicker />
            {posts.length ? <PostPreviewList /> : <><button onClick={loadPosts} >Load Live Posts</button><button onClick={loadMockPosts} >Load Mock Posts</button></>}
        </>
    );
}
export default HomePage;