import { useState } from 'react';
import PostTitle from "../postTitle/PostTitle";
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton, MobileStepper, Fade } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const PostGallery = ({title, imageUrls, alt}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleClickPrev = () => {
        setSelectedImageIndex(selectedImageIndex => selectedImageIndex - 1);
    };
    const handleClickNext = () => {
        setSelectedImageIndex(selectedImageIndex => selectedImageIndex + 1);
    };

    const cardMediaElements = imageUrls.map((url, index) => {
        return (
            <Fade key={index} direction='left' in={index === selectedImageIndex} >
                <Box sx={{
                    backgroundImage: `url(${url})`, 
                    backgroundSize: 'cover',
                    borderRadius: '32px',
                    flexBasis: '100%',
                    }}
                >
                    <CardMedia 
                        component='img' 
                        image={url} 
                        height='540' 
                        alt={alt} 
                        loading='lazy' 
                        sx={{
                            objectFit: 'contain', 
                            backdropFilter:'blur(32px)',
                            borderRadius: '32px'
                        }}
                    />
                </Box>
            </Fade>
        );
    });

    return (
        <CardContent>
            <PostTitle title={title} /> 
            {cardMediaElements[selectedImageIndex]}
            <MobileStepper 
                variant='dots' 
                steps={imageUrls.length}
                activeStep={selectedImageIndex} 
                position='static'
                nextButton={
                    <IconButton 
                        onClick={handleClickNext} 
                        disabled={selectedImageIndex + 1 === imageUrls.length} 
                    >
                        <ArrowForward>Next</ArrowForward>
                    </IconButton>
                } 
                backButton={
                    <IconButton 
                        onClick={handleClickPrev} 
                        variant='contained' 
                        disabled={selectedImageIndex === 0} 
                    >
                        <ArrowBack>Prev.</ArrowBack>
                    </IconButton>
                }
            />
        </CardContent>
    )
};

export default PostGallery;