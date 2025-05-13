import { useEffect, useState } from 'react'
import axios from 'axios';

export default function API() {
  const [animeList, setAnimeList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime?q=naruto&limit=10')
      .then((response) => {
        setAnimeList(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data from Jikan API:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Anime List (Jikan API)</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {animeList.map(anime => (
          <div key={anime.mal_id} style={{ margin: '10px', width: '200px' }}>
            <img 
              src={anime.images.jpg.image_url} 
              alt={anime.title} 
              style={{ width: '100%' }} 
            />
            <p>{anime.title}</p>
            <p>{anime.name}</p>
            <p>{anime.mal_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


