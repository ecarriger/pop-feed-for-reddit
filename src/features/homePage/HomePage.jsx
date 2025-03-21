import CategoryPicker from "../../components/categoryPicker/CategoryPicker";
import PostPreviewList from "../../components/postPreviewList/PostPreviewList";

const HomePage = () => {
    return(
        <>
            <h2>HomePage</h2>
            <CategoryPicker />
            <PostPreviewList />
        </>
    );
}
export default HomePage;