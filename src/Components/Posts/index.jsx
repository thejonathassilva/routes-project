import React from 'react'
import styles from './Posts.module.css'
import posts from 'json/posts.json'
import PostCard from 'Components/Posts/PostCard'

export default function Posts() {
  return (
    <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard 
              post={post}
            />
          </li>
        ))}
      </ul>
  )
}
