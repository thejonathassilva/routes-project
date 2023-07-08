import React from 'react'
import styles from './PostModel.module.css'
import './Post.css'
import Posts from 'Components/Posts'
import { useParams } from 'react-router-dom';

export default function PostModel({ coverPhoto, title, children }) {
  const params = useParams();

  return (

    <article className={styles.postModelContainer}>
      <div 
        className={styles.coverPhoto}
        style={{ backgroundImage: `url(${coverPhoto})` }}
      >
      </div>

      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.postContentContainer}>
        {children}
        <h2>Outros posts que voce pode gostar:</h2>
        <Posts
          size="4"
          id={params.id}
        />
      </div>

    </article>
  )
}
