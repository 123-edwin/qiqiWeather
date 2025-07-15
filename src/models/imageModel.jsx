const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; // O como lo hayas nombrado en .env

export const getImage = async (query) => {
    try {
        // Pedimos hasta 10 resultados para tener variedad
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=10`, {
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();
        if (!data.results || data.results.length === 0) {
            throw new Error("No image found");
        }

        // Elegimos una imagen aleatoria del array de resultados
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const img = data.results[randomIndex];
        return {
            url: img.urls.regular,
            description: img.description || img.alt_description || '',
            author: img.user?.name || '',
            authorLink: img.user?.links?.html || ''
        };
    } catch (error) {
        console.error("Error fetching Unsplash image:", error);
        throw error;
    }
}
