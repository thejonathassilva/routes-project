import React from 'react'
import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModel from 'Components/PostModel';

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => post.id.toString() === params.id);
  if(!post) {
    return (
      <h1>Post não encontrado!</h1>
    )
  }

  return (
    <PostModel 
    children={post.text}
    title={post.title}
    coverPhoto={`/assets/posts/${post.id}/capa.png`}
    key={post.id}
    >
    </PostModel>
  )
}
