import Typography from '@mui/material/Typography';

const PostTitle = ({title}) => {
    return <Typography variant='h5' sx={{paddingBottom: '1rem'}}>{title}</Typography>
};

export default PostTitle;