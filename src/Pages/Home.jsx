import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">Bienvenue sur mon ePortfolio!</h1>
        <p><strong>Nom:</strong> Alexy Thouin</p>
        <p><strong>Téléphone:</strong> (514) 627-1105</p>
        <p><strong>Adresse:</strong> ----</p>

        <nav>
          <ul className="nav-list">
            <li><Link to="/api">API</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/top10anime">Top Anime</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
