import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import CounterChip from '../counterChip/CounterChip';
import styles from './CounterChips.module.css';


const CounterChips = ({likeCount, commentCount}) => {
    return (
        <div className={styles.chipContainer}>
            <CounterChip count={likeCount} icon={<ThumbUpIcon fontSize="small" sx={{marginLeft: '.5rem'}} />} />
            <CounterChip count={commentCount} icon={<CommentIcon  fontSize="small" sx={{marginLeft: '.5rem'}} />} />
        </div>
    );
};

export default CounterChips;