export default function Footer({ perfil }) {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {perfil.name}</span>
      <div>
        <a href={perfil.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={perfil.youtube} target="_blank" rel="noreferrer">YouTube</a>
        <a href={perfil.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}