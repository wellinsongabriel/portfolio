import ProdutosCard from './ProdutosCard'

export default function ProdutosSection({ produtos }) {
  return (
    <section id="produtos" className="section">
      <p className="eyebrow">PRODUTOS DIGITAIS</p>
      <h2>Conheça alguns produtos</h2>
      <p className="section-intro">Materiais e produtos criados para ajudar pessoas e negócios a avançarem.</p>

      <div className="cards products">
        {produtos.map((product) => (
          <ProdutosCard key={product.title} product={product} />
        ))}
      </div>
    </section>
  )
}