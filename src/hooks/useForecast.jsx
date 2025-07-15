import {useState, useEffect} from 'react';
import { getForecast } from '@m/forecastModel';

export const useForecast = (place, language) => {
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!place || place.trim() == ""){
            setForecast(null);
            setError(null);
            return;
        }

        const fetchForecast = async () => {
            try {
                const data = await getForecast(place, language);
                setForecast(data);
            } catch (error) {
                setError(error);
            }
        }
        fetchForecast();
    }, [place, language]);
    return { forecast, error };
}