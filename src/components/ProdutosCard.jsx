import { IconeFlecha } from './icons'

export default function ProdutosCard({ product }) {
  const videoIdMatch = product.videoUrl ? product.videoUrl.match(/v=([^&]+)/) : null
  const videoId = videoIdMatch ? videoIdMatch[1] : null

  return (
    <article className="card product">
      {videoId && (
        <a
          className="project-thumbnail"
          href={product.videoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Ver demonstração de ${product.title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={`Miniatura da demonstração de ${product.title}`}
            loading="lazy"
          />
          <span>Ver demonstração <IconeFlecha /></span>
        </a>
      )}

      <div className="card-head">
        <span className="product-icon">✦</span>
        <small>DISPONÍVEL EM {product.platform.toUpperCase()}</small>
      </div>

      <h3>{product.title}</h3>
      <p>{product.description}</p>

      <div className="purchase-links">
        {product.purchaseLinks.map((link) => (
          <a className="button compact" href={link.url} key={link.label} target="_blank" rel="noreferrer">
            Comprar na {link.label} <IconeFlecha />
          </a>
        ))}
      </div>

      <a className="text-link" href={product.videoUrl} target="_blank" rel="noreferrer">
        Assistir vídeo no YouTube <IconeFlecha />
      </a>
    </article>
  )
}