import { useState, useEffect } from "react";
import './API.css';

export default function API() {
  const [animeData, setAnimeData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?page=${page}&sfw`)
      .then((res) => res.json())
      .then((data) => {
        setAnimeData(data.data);
        setHasNextPage(data.pagination.has_next_page);
      })
      .catch((error) => {
        console.error("Erreur lors du fetch :", error);
      });
  }, [page]);

  const handleNext = () => {
    if (hasNextPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>Tous les animes (Page {page})</h1>

      <div className="anime-grid">
        {animeData.map((anime) => (
          <div key={anime.mal_id} className="anime-card">
            <img
              src={anime.images?.jpg?.image_url}
              alt={anime.title}
            />
            <h3>{anime.title}</h3>
            <p>
              <strong>Genres:</strong>{" "}
              {anime.genres.map((g) => g.name).join(", ") || "Non spécifié"}
            </p>
            <p>
              <strong>Rating:</strong> {anime.rating || "Non spécifié"}
            </p>
            <p>
              <strong>Score:</strong> {anime.score || "Non spécifié"}
            </p>
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button onClick={handlePrevious} disabled={page === 1}>
          Précédent
        </button>
        <button onClick={handleNext} disabled={!hasNextPage}>
          Suivant
        </button>
      </div>
    </div>
  );
}
