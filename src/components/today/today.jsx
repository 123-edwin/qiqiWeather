import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function getDayName(dataString, locale = 'es-Es'){
    const date = new Date(dataString);
    return date.toLocaleDateString(locale, {weekday: 'long'});
}


export default function Today({ forecast, image, language }) {
    const locale = language === 'es' ? 'es-Es' : language === 'en' ? 'en-US' : language;
    // image puede ser null o un objeto { url, description, author, authorLink }
    const url = image?.url || null;
    const description = image?.description || '';
    const author = image?.author || '';
    const authorLink = image?.authorLink || '';

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                height: { xs: 'auto', sm: 200 },
                backgroundColor: '#aed6f1',
                color: 'white',
                alignItems: 'stretch',
                position: 'relative',
                mb: 2
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    p: { xs: 1, sm: 2 }
                }}
            >
                <CardContent sx={{ flex: '1 0 auto', p: 0 }}>
                    <Typography component="div" variant="h6" sx={{ fontSize: { xs: 16, sm: 20 } }}>
                        {forecast?.location?.name}, {forecast?.location?.region}, {forecast?.location?.country}
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ fontSize: { xs: 14, sm: 18 }, mb: 1 }}>
                        {getDayName((forecast?.location?.localtime), locale)}
                    </Typography>
                </CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: { xs: 1, sm: 2 },
                        pl: 0,
                        pb: 0,
                        mt: 1
                    }}
                >
                    <Typography variant="subtitle2" component="div" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                        {forecast?.current?.temp_c} °C
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                        humidity: {forecast?.current?.humidity}%
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                        {forecast?.current?.condition?.text}
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                        Wind {forecast?.current?.wind_kph} kph
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                        UV: {forecast?.current?.uv}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                    position: 'relative',
                    minWidth: { xs: '100%', sm: 220 }
                }}
            >
                <CardMedia
                    component="img"
                    sx={{
                        width: '100%',
                        height: { xs: 180, sm: '100%' },
                        objectFit: 'cover',
                        backgroundColor: '#bdc3c75c',
                        borderRadius: 2
                    }}
                    image={url}
                    alt={description || 'Weather image'}
                />
                {(description || author) && (
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            background: 'rgba(52, 73, 94, 0.7)',
                            color: 'white',
                            zIndex: 2,
                            p: 1,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            fontSize: { xs: 10, sm: 12 }
                        }}
                    >
                        {description && (
                            <Typography variant="subtitle2" sx={{ fontSize: 12, fontWeight: 400 }}>
                                {description}
                            </Typography>
                        )}
                        {author && (
                            <Typography variant="caption" sx={{ fontSize: 11, fontWeight: 300 }}>
                                by{' '}
                                {authorLink ? (
                                    <a href={authorLink} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
                                        {author}
                                    </a>
                                ) : (
                                    author
                                )}
                            </Typography>
                        )}
                    </Box>
                )}
            </Box>
        </Card>
    );
}