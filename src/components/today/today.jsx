import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Today({ forecast, image }) {
    // image puede ser null o un objeto { url, description, author, authorLink }
    const url = image?.url || null;
    const description = image?.description || '';
    const author = image?.author || '';
    const authorLink = image?.authorLink || '';

    return (
        <Card sx={{ display: 'flex', height: 200, backgroundColor: '#aed6f1', color: 'white' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 2 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {forecast?.location?.name}, {forecast?.location?.region}, {forecast?.location?.country}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {forecast?.location?.localtime}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
                    <Typography variant="subtitle1" component="div">
                        {forecast?.current?.temp_c} °C
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ ml: 2 }}>
                        humidity: {forecast?.current?.humidity}%
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ ml: 2 }}>
                        {forecast?.current?.condition?.text}
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ ml: 2 }}>
                        Wind {forecast?.current?.wind_kph} kph
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ ml: 2 }}>
                        UV: {forecast?.current?.uv}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', position: 'relative' }}>
                {(description || author) && (
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', background: 'rgba(0,0,0,0.4)', color: 'white', zIndex: 2, p: 1 }}>
                        {description && (
                            <Typography variant="subtitle2" sx={{ fontSize: 12, fontWeight: 400 }}>
                                {description}
                            </Typography>
                        )}
                        {author && (
                            <Typography variant="caption" sx={{ fontSize: 11, fontWeight: 300 }}>
                                by{' '}
                                {authorLink ? (
                                    <a href={authorLink} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>{author}</a>
                                ) : (
                                    author
                                )}
                            </Typography>
                        )}
                    </Box>
                )}
                <CardMedia
                    component="img"
                    sx={{
                        flex: 1,
                        objectFit: 'contain',
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#bdc3c75c',
                        p: 1,
                        borderRadius: 2
                    }}
                    image={url}
                    alt={description || 'Weather image'}
                />
            </Box>
        </Card>
    );
}