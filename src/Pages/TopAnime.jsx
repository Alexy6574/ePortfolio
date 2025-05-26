import { useEffect, useState } from 'react'

export default function TopAnime() {
  
// Les deux useStat que j'ai besoins d'utiliser pour l'instant 

  const [animeList, setAnimeList] = useState([])
  const [loading, setLoading] = useState(true)

// Les tableaux des id de mes 10 anime préférée, chaque id représente un anime 

  const topAnimeIds = [
    40748, // Mon numéro 1. Jujutsu Kaisen
    29803, // Mon numéro 2. Overlord
    11061, // Mon numéro 3. Hunter x Hunter
    20,    // Mon numéro 4. Naruto
    21,    // Mon numéro 5. One Piece
    16498, // Mon numéro 6. Attack on Titan 
    527,   // Mon numéro 7. Pokémon
    40496, // Mon numéro 8. The Misfit of Demon King Academy
    20583, // Mon numéro 9. Haikyuu!!
    37430  // Mon numéro 10. Slime
  ];

  
  useEffect(() => {
    const fetchAnime = async () => {
      
// Je fais un try, catch pour aller récuper les ids de mes top Anime avec un .map s
      
      try {
        const responses = await Promise.all(
          topAnimeIds.map(id =>
            fetch(`https://api.jikan.moe/v4/anime/${id}`).then(res => res.json())
          )
        );
        const animeData = responses.map(res => res.data)
        setAnimeList(animeData)

// si jamais il ne fonctionne il m'affiche une erreur 
      
      } catch (error) {
          console.error('Failed to fetch anime:', error)
      } finally {
          setLoading(false)
      }
    };

    fetchAnime()
  }, []);

  if (loading) return <p>Loading my top 10 anime...</p>

// Je return en allant chercher tous les informations qui m'intéresse sur chacun des animes choisis avec deux .map différent

//1. .map me permet d'aller chercher l'images, l'id et le titre

//2. .map me permet d'aller chercher le type d'animer

  return (
    <div>
      <h1>Mon Top 10 Anime</h1>
      <div className="anime-list">
        {animeList.map((anime, index) => (
          <div key={anime.mal_id} className="anime-item">
            <h2>#{index + 1} {anime.title}</h2>
            <img src={anime.images.jpg.image_url} alt={anime.title} />            
            <p>
              <strong>Genres:</strong>{' '}
              {anime.genres && anime.genres.length > 0
                ? anime.genres.map(genre => genre.name).join(', ')
                : 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
