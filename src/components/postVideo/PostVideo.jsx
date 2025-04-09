import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PostVideo = ({title, videoUrl}) => {
    return(
        <CardContent>
            <Typography variant='h3'>{title}</Typography>
            <CardMedia 
                component='video' 
                type='video/mp4'  
                image={videoUrl} 
                height='540' 
                controls 
                controlsList='nodownload' 
                disablePictureInPicture
                muted='false' >
                <source src={videoUrl} />
                <Typography>Unable to load video</Typography>
            </CardMedia>
        </CardContent>
    );
};

export default PostVideo;