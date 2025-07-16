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
        <Card sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            height: { xs: 'auto', sm: 200 },
            backgroundColor: '#aed6f1',
            color: 'white',
            minHeight: { xs: 320, sm: 200 }
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                p: { xs: 1, sm: 2 }
            }}>
                <CardContent sx={{ flex: '1 0 auto', pb: { xs: 0.5, sm: 2 } }}>
                    <Typography component="div" variant="h5">
                        {forecast?.location?.name}, {forecast?.location?.region}, {forecast?.location?.country}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {forecast?.location?.localtime}
                    </Typography>
                </CardContent>
                <Box sx={{
                    display: 'flex',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexWrap: 'wrap',
                    pl: { xs: 0.5, sm: 2 },
                    pb: { xs: 0.5, sm: 1 },
                    gap: { xs: 1, sm: 0 }
                }}>
                    <Typography variant="subtitle1" component="div" sx={{ fontSize: { xs: 13, sm: 16 } }}>
                        {forecast?.current?.temp_c} °C
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ ml: { xs: 1, sm: 2 }, fontSize: { xs: 13, sm: 16 } }}>
                        humidity: {forecast?.current?.humidity}%
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ ml: { xs: 1, sm: 2 }, fontSize: { xs: 13, sm: 16 } }}>
                        {forecast?.current?.condition?.text}
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ ml: { xs: 1, sm: 2 }, fontSize: { xs: 13, sm: 16 } }}>
                        Wind {forecast?.current?.wind_kph} kph
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ ml: { xs: 1, sm: 2 }, fontSize: { xs: 13, sm: 16 } }}>
                        UV: {forecast?.current?.uv}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', position: 'relative' }}>
                {(description || author) && (
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(0,0,0,0.4)', color: 'white', zIndex: 2, p: 1 }}>
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
                        objectFit: 'cover',
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