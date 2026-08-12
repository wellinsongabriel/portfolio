import { IconeFlecha } from './icons'

export default function ResumoSection({ perfil }) {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-copy">
        <h1>Desenvolva suas habilidades em <em>programação</em> com diversos projetos práticos.</h1>
        <p className="lead">{perfil.bio} Conheça meus projetos, acompanhe demonstrações e explore os produtos que desenvolvi.</p>
        <div className="actions">
          <a className="button" href="#projetos">Ver projetos <IconeFlecha /></a>
          <a className="button ghost" href={perfil.github} target="_blank" rel="noreferrer">GitHub <IconeFlecha /></a>
        </div>
      </div>
      <div className="terminal" aria-label="Resumo técnico">
        <div className="terminal-top"><i></i><i></i><i></i><span>portfolio.java</span></div>
        <code><b>var</b> developer = Map.of{'('}<br />&nbsp;&nbsp;"focus", <s>"experiências digitais"</s>,<br />&nbsp;&nbsp;"stack", List.of{'('}<s>"Java"</s>, <s>"React"</s>, <s>"Node"</s>, <s>"Micronaut"</s>{')'}<br />{');'}</code>
      </div>
    </section>
  )
}