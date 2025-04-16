import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addPost, selectAllPosts } from "../postsSlice";
import { loadRedditData, loadMockRedditData } from "../../../utilities/redditApi";
import CategoryPicker from "../../../components/categoryPicker/CategoryPicker";
import PostPreviewList from "../../../components/postPreviewList/PostPreviewList";

const HomePage = () => {
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();

    const loadPosts = async () => {
        const redditData = await loadRedditData();
        redditData.forEach( post => {
            dispatch(addPost(post));
        });
    }
    const loadMockPosts = async () => {
        const mockRedditData = await loadMockRedditData();
        mockRedditData.forEach( post => {
            dispatch(addPost(post));
        });
    }

    return(
        <>
            <h2>HomePage</h2>
            <CategoryPicker />
            {Object.values(posts).length !== 0 ? <PostPreviewList posts={posts} /> : <><button onClick={loadPosts} >Load Live Posts</button><button onClick={loadMockPosts} >Load Mock Posts</button></>}
        </>
    );
}
export default HomePage;