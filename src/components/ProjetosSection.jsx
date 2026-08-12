import { useMemo, useState } from 'react'
import ProjetoCard from './ProjetoCard'

const CATEGORIES = ['Todos', 'Frontend', 'Backend', 'Full stack']

export default function ProjetosSection({ projetos }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Todos')

  const filteredProjects = useMemo(() => {
    return projetos.filter((project) => {
      const term = query.toLowerCase()
      const matchesCategory = filter === 'Todos' || project.category === filter
      const matchesSearch = `${project.title} ${project.description} ${project.tags.join(' ')}`
        .toLowerCase()
        .includes(term)
      return matchesCategory && matchesSearch
    })
  }, [projetos, query, filter])

  return (
    <section id="projetos" className="section">
      <p className="eyebrow">{'</>'} PROJETOS</p>
      <h2>Projetos em destaque</h2>
      <p className="section-intro">Seleção de repositórios.</p>

      <div className="project-controls">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar projetos..."
          aria-label="Buscar projetos"
        />
        <div className="filters">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              className={filter === item ? 'active' : ''}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="cards projects">
        {filteredProjects.map((project) => (
          <ProjetoCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}