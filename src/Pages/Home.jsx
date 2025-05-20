import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home-page">
      <p>Nom: Alexy Thouin</p>
      <p>Tel: (514) 627-1105</p>
      <p>Adresse: ----</p>
      <nav>
        <ul>
          <li><Link to="/api">API</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/top10anime">Top Anime</Link></li>
        </ul>
      </nav>
    </div>
  )
}
