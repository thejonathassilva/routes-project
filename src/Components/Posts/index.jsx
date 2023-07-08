import React from 'react'
import styles from './Posts.module.css'
import posts from 'json/posts.json'
import Post from 'Components/Posts/Post'

export default function Posts() {
  return (
    <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post 
              post={post}
            />
          </li>
        ))}
      </ul>
  )
}
