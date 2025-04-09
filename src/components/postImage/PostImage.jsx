import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PostImage = ({title, imageUrl, alt}) => {
    return (
        <CardContent>
            <Typography variant='h3'>{title}</Typography>
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