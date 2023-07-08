import React, { useEffect, useState } from 'react'
import styles from './Posts.module.css'
import posts from 'json/posts.json'
import PostCard from 'Components/Posts/PostCard'

export default function Posts( { size, id}) {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    let filtered = posts;

    if(size) {
      const maxPosts = Math.min(parseInt(size), posts.length);
      filtered = posts.filter((post) => post.id.toString() !== id).slice(0, maxPosts);
    }

    setFilteredPosts(filtered);
  }, [size, id])

  return (
    <ul className={styles.posts}>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <PostCard 
              post={post}
            />
          </li>
        ))}
      </ul>
  )
}
