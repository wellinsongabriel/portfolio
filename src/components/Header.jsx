import { IconeCodigo, IconeTema } from './icons'

export default function Header({ perfil, theme, toggleTheme }) {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio">
        <IconeCodigo />
        {perfil.name}
      </a>
      <nav aria-label="Navegação principal">
        <a href="#projetos">Projetos</a>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Contato</a>
      </nav>

      <div className="topbar-actions">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          type="button"
          aria-pressed={theme === 'dark'}
          aria-label={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
          title={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        >
          <IconeTema theme={theme} />
        </button>

        <a 
          className="button compact contatar" 
          href={`https://wa.me/${perfil.whatsapp}`} 
          target="_blank"
          rel="noreferrer"
        >
          Vamos conversar
        </a>
      </div>
    </header>
  )
}