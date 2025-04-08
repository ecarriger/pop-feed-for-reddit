import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PostVideo = ({title}) => {
    return(
        <CardContent>
            <Typography>{title}</Typography>
            <h3>PostVideo</h3>
        </CardContent>
    );
};

export default PostVideo;