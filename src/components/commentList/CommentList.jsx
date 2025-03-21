import Comment from "../comment/Comment";


const CommentList = () => {
    return (
        <>
            <h2>CommentList</h2>
            <ul>
                <Comment />
                <Comment />
                <Comment />
            </ul>
        </>
    );
};

export default CommentList;