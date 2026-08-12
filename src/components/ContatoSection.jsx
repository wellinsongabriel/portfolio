import { IconeFlecha } from './icons'

export default function ContatoSection({ perfil }) {
  return (
    <section id="contato" className="contact section">
      <p className="eyebrow">CONTATO</p>
      <h2>Tem uma ideia em mente?</h2>
      <p>Vamos conversar sobre seu próximo produto digital.</p>
      <div className="actions">
        <a className="button" href={`mailto:${perfil.email}`}>Enviar e-mail <IconeFlecha /></a>
        <a className="button ghost" href={`https://wa.me/${perfil.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp <IconeFlecha /></a>
      </div>
    </section>
  )
}