import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardForecast({ icon, date, conditionText, temPc, humidity, maxWind, dailyChanceOfRain, uv }) {
    return (
        <>
            <Card sx={{height: '300px', width: '180px', boxShadow: 3, borderRadius: 2, p: 2, transition: '0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }, backgroundColor: '#d6eaf873', color: '#333' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Avatar alt="Weather Icon" src={`https://${icon}`} sx={{ '--Avatar-size': '4rem' }} />
                    <Typography variant="h6">{date}</Typography>
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