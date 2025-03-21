import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { addPost } from "../postsSlice";
import { loadMockRedditData } from "../../../utilities/redditApi";
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
        const mockRedditData = await loadMockRedditData();
        setPosts(mockRedditData);
        console.log(mockRedditData);
    }

    return(
        <>
            <h2>HomePage</h2>
            <CategoryPicker />
            {posts.length ? <PostPreviewList /> : <button onClick={loadPosts} >Load Posts</button>}
        </>
    );
}
export default HomePage;