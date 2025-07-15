import { useState, useEffect } from 'react';
import { getImage } from '@m/imageModel';

export function useUnsplash(query) {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || query.trim() === "") {
      setImageData(null);
      setError(null);
      return;
    }
    const fetchImage = async () => {
      setLoading(true);
      setError(null);
      try {
        const imgObj = await getImage(query);
        setImageData(imgObj);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [query]);

  return { image: imageData, loading, error };
}
