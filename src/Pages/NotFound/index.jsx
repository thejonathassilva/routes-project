import React from 'react'
import styles from './NotFound.module.css'
import error404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'
import MainButton from 'Components/MainButton'

export default function NotFound() {
  const navegate = useNavigate();

  return (
    <>
      <div className={styles.containerContent}>
        <span className={styles.text404}>404</span>

        <h1 className={styles.title}>Ops! Página não encontrada.</h1>

        <p className={styles.paragraph}>
          Tem certeza de que era isso que você estava procurando? 
        </p>
        <p className={styles.paragraph}>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div 
          className={styles.containerButton}
          onClick={() => navegate(-1)}
        >
          <MainButton
            size="lg"
          >
            Voltar
          </MainButton>
        </div>

        <img 
          className={styles.dogImage}
          src={error404} 
          alt="Cachorro de óculos e vestido como humano" 
          />

      </div>

      <div className={styles.whiteSpace}></div>
    </>
  )
}
