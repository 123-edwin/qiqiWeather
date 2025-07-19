import CardForecast from "@c/cardForecast/cardForecast"
import Grid from "@mui/material/Grid"


export default function ForecastList ({forecast, language}){
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{paddingTop: 2, alignItems: 'center', justifyContent: 'center'}}> 
            {forecast?.forecast?.forecastday?.slice(1).map((day) => (
                <Grid key={day.date} sx={{display: 'flex', xs: 2, sm: 4, md: 4}}>
                    <CardForecast
                        icon={day.day.condition.icon}
                        date={day.date}
                        conditionText={day.day.condition.text}
                        temPc={day.day.avgtemp_c}
                        humidity={day.day.avghumidity}
                        maxWind={day.day.maxwind_kph}
                        dailyChanceOfRain={day.day.daily_chance_of_rain}
                        uv={day.day.uv}
                        language={language}
                    />
                </Grid>
            ))}
        </Grid>
    )
}