export default function Projects() {
  const projects = [
    {
      title: "To-do list",
      description: "Une simple to do list",
    },
    {
      title: "Meme Generator",
      description: "Une API des 50 meilleurs memes",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#ffffff',   
        minHeight: '100vh',
        padding: '40px 20px',
        color: '#000000',             
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Voici mes différents projets
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <li
            key={index}
            style={{
              backgroundColor: '#f9f9f9',  
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ marginTop: 0 }}>{project.title}</h3>
            <p style={{ marginBottom: 0 }}>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
