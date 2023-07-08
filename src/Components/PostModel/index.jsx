import React from 'react'
import styles from './PostModel.module.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Post.css'

export default function PostModel({ coverPhoto, title, children }) {
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
        <div className="post-markdown-container">
          <ReactMarkdown>
            {children}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  )
}
