import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const PostLink = ({title, linkUrl, imgUrl, alt}) => {
    return (
        <CardContent sx={{display: 'flex'}} >
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h3">{title}</Typography>
                <Link href={linkUrl}>{linkUrl}</Link>
            </Box>
            <CardMedia image={imgUrl} component='img' alt={alt} sx={{height: 'auto', width: 'auto'}} />
        </CardContent> 
    );
};

export default PostLink;