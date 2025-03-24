import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import Paper from '@mui/material/Paper'
import CounterChip from "../counterChip/CounterChip";


const CounterChips = ({likeCount, commentCount}) => {
    return (
        <Paper>
            <CounterChip count={likeCount} icon={<ThumbUpIcon />} />
            <CounterChip count={commentCount} icon={<CommentIcon />} />
        </Paper>
    );
};

export default CounterChips;