import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PostSelfText = ({title, selfText}) => {
    return (
        <CardContent>
            <Typography variant='h3'>{title}</Typography>
            <Typography>{selfText}</Typography>
        </CardContent>
    )
};

export default PostSelfText;