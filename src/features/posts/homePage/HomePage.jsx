import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addPost, deleteAllPosts, selectAllPosts } from "../postsSlice";
import { loadRedditData, loadMockRedditData } from "../../../utilities/redditApi";
import CategoryPicker from "../../../components/categoryPicker/CategoryPicker";
import PostPreviewList from "../../../components/postPreviewList/PostPreviewList";

const HomePage = () => {
    const dispatch = useDispatch();
    const [ redditData, setRedditData ] = useState([]);
    useEffect(() => {
        dispatch(deleteAllPosts());
        redditData.forEach( post => {
            dispatch(addPost(post));
        });
    }, [redditData, dispatch]);

    const posts = useSelector(selectAllPosts);

    const loadPosts = async () => {
        const data = await loadRedditData();
        setRedditData(data)

    }
    const loadMockPosts = async () => {
        const data = await loadMockRedditData();
        setRedditData(data)
    }

    return(
        <>
            <h2>HomePage</h2>
            <CategoryPicker />
            <>
                <button onClick={loadPosts} >Load Live Posts</button>
                <button onClick={loadMockPosts} >Load Mock Posts</button>
            </>
            <PostPreviewList posts={posts} /> 
        </>
    );
}
export default HomePage;