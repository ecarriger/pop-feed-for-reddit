import PostTitle from '../postTitle/PostTitle';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const PostImage = ({title, imageUrl, alt}) => {
    return (
        <CardContent>
            <PostTitle title={title} />
            <Box sx={{
                backgroundImage: `url(${imageUrl})`, 
                backgroundSize: 'cover',
                borderRadius: '32px'
            }}>
                <CardMedia 
                    component='img' 
                    image={imageUrl} 
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
    );
};

export default PostImage;