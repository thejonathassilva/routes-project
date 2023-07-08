import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModel from 'Components/PostModel';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from 'Pages/NotFound';
import DefaultPage from 'Components/DefaultPage';

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => post.id.toString() === params.id);
  if(!post) {
    return (
      <NotFound/>
    )
  }

  return (
    <Routes>
      <Route path='*' element={<DefaultPage/>}>
        <Route index element={
          <PostModel 
          title={post.title}
          coverPhoto={`/assets/posts/${post.id}/capa.png`}
          key={post.id}
          >
            <div className="post-markdown-container">
                <ReactMarkdown>
                  {post.text} 
                </ReactMarkdown>
              </div>
          </PostModel>
        }
        />
      </Route>
    </Routes>
  )
}
