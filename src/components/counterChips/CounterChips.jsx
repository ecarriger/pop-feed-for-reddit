import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import CounterChip from "../counterChip/CounterChip";


const CounterChips = ({likeCount, commentCount}) => {
    return (
        <div>
            <CounterChip count={likeCount} icon={<ThumbUpIcon fontSize="small" />} />
            <CounterChip count={commentCount} icon={<CommentIcon  fontSize="small"/>} />
        </div>
    );
};

export default CounterChips;