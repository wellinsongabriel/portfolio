import { IconeFlecha } from './icons'

export default function ProjetoCard({ project }) {
  return (
    <article className="card project">
      {project.thumbnailVideoId && (
        <a
          className="project-thumbnail"
          href={project.playlistUrl || `https://www.youtube.com/watch?v=${project.thumbnailVideoId}`}
          target="_blank"
          rel="noreferrer"
          aria-label={project.playlistUrl ? `Ver playlist de ${project.title}` : `Ver vídeo de ${project.title}`}
        >
          <img 
            src={`https://i.ytimg.com/vi/${project.thumbnailVideoId}/hqdefault.jpg`} 
            alt={`Miniatura do vídeo ${project.title}`} 
            loading="lazy" 
          />
          <span>{project.playlistUrl ? 'Ver playlist' : 'Ver demonstração'} <IconeFlecha /></span>
        </a>
      )}
      <div className="card-head">
        <span className="folder">▰</span>
        <small>{project.category}</small>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a className="button ghost small" href={project.github} target="_blank" rel="noreferrer">
        Ver no GitHub <IconeFlecha />
      </a>
    </article>
  )
}