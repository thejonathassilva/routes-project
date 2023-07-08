import styles from './Banner.module.css'
import React from 'react'
import coloredCircle from 'assets/circulo_colorido.png'

export default function Banner() {
  const imageUrl = 'https://avatars.githubusercontent.com/u/83685854?v=4';
  
  return (
    <div className={styles.banner}>
      <div >
        <h1 className={styles.title}>
          Olá Mundo!
        </h1>

        <p className={styles.paragraph}>
          Meu nome é Jonathas, seja bem vindo ao meu curriculo on-line desenvolvido todo em React
        </p>
    </div>

      <div className={styles.images}>
        <img 
          className={styles.coloredCircle}
          src={coloredCircle}
          aria-hidden={true}
          alt="" 
        />
        <img 
        className={styles.myPicture}
          src={imageUrl} 
          alt="Foto de Jonathas Silva" 
        />

      </div>
  </div>
  )
}
