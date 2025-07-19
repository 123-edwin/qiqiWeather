import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function getDayName(dateString, locale = 'es-Es'){
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {weekday: 'long'});
}

export default function CardForecast({ icon, date, conditionText, temPc, humidity, maxWind, dailyChanceOfRain, uv, language }) {
    const locale = language === 'es' ? 'es-Es': language === 'en' ? 'en-US': language;
    return (
        <>
            <Card sx={{
                height: {xs: 300, sm: 300}, 
                width: {xs: 200, sm: 200}, 
                maxWidth: 200,
                minWidth: {xs: 140, sm: 200}, 
                boxShadow: 3, 
                borderRadius: 2, p: 2, transition: '0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }, backgroundColor: '#d6eaf873', color: '#333' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Avatar alt="Weather Icon" src={`https://${icon}`} sx={{ '--Avatar-size': '4rem' }} />
                    <Typography variant="h6">{getDayName(date, locale)}</Typography>
                    <Typography variant="body2">{conditionText}</Typography>
                    <Typography variant="body2">{temPc} °</Typography>
                    <Typography variant="body2">Humidity: {humidity}%</Typography>
                    <Typography variant="body2">Wind: {maxWind} kph</Typography>
                    <Typography variant="body2">Rain chance: {dailyChanceOfRain}%</Typography>
                    <Typography variant="body2">UV: {uv}</Typography>
                </CardContent>
            </Card>
        </>
    )
}