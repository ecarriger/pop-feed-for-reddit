import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

const PostImage = ({imageUrl, alt}) => {
    return (
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
    );
};

export default PostImage;