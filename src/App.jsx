import { useState, useEffect } from 'react'
import { perfil, projetos, produtos } from './data/content'

import Header from './components/Header'
import ResumoSection from './components/ResumoSection'
import ProjetosSection from './components/ProjetosSection'
import ProdutosSection from './components/ProdutosSection'
import ContatoSection from './components/ContatoSection'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Header perfil={perfil} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <ResumoSection perfil={perfil} />
        <ProjetosSection projetos={projetos} />
        <ProdutosSection produtos={produtos} />
        <ContatoSection perfil={perfil} />
      </main>
      <Footer perfil={perfil} />
    </>
  )
}

export default App