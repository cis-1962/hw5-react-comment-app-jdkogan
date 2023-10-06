import React, { useState } from 'react';
import Post from './Post';
import Comment from './Comment';
import { CommentType } from './CommentType';
import './styles.css';

export default function App() {
  const [comments, setComments] = useState<CommentType[]>([]);

  return (
    <div className="app">
      <h1>Jeremy Kogan Comment App</h1>
      <h3>Welcome to my homework 5!</h3>
      <Post setComments={setComments} />
      {comments.map((comment) => (
        <Comment
          key={`${comment.name}_${comment.content}`}
          comment={comment}
          setComments={setComments}
        />
      ))}
    </div>
  );
}
