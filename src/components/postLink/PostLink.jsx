import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";

const PostLink = ({title, linkUrl, imgUrl, alt}) => {
    return (
        <CardContent sx={{display: 'flex'}} >
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography>{title}</Typography>
                <Typography>{linkUrl}</Typography>
            </Box>
            <CardMedia image={imgUrl} component='img' alt={alt} sx={{height: 'auto', width: 'auto'}} />
        </CardContent> 
    );
};

export default PostLink;