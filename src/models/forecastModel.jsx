const forecastKey = import.meta.env.VITE_API_KEY;
const days = 7;

export const getForecast = async (place, languaje) => {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${forecastKey}&q=${place}&days=${days}&lang=${languaje}`);
        if(!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        if (data.error) {
            throw new Error(`Error data: ${data.error}`);
        }
        return data;
    } catch (error) {
        console.error("Error al obtener el pronóstico", error);
        throw error;
        
    }
}