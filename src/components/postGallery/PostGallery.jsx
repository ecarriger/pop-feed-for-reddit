import PostTitle from "../postTitle/PostTitle";
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const PostGallery = ({title, imageUrls, alt}) => {
    return (
        <CardContent>
            <PostTitle>{title}</PostTitle>
            <Box sx={{
                backgroundImage: `url(${imageUrls[0]})`, 
                backgroundSize: 'cover',
                borderRadius: '32px'
            }}>
                <CardMedia 
                    component='img' 
                    image={imageUrls[0]} 
                    height='540' 
                    alt={alt} 
                    sx={{
                        objectFit: 'contain', 
                        backdropFilter:'blur(32px)',
                        borderRadius: '32px'
                    }}
                />
            </Box>
        </CardContent>
        
    )
};

export default PostGallery;