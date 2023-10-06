import React, { useState } from 'react';
import { CommentType } from './CommentType';

export default function Post({
  setComments,
}: {
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
}) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (name && content) {
      setComments((prevComments) => [
        ...prevComments,
        { name, content, replies: [] },
      ]);
      setName('');
      setContent('');
    }
  };

  return (
    <div className="wrap-text">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Comment"
      />
      <button type="button" onClick={handleSubmit}>
        Post
      </button>
    </div>
  );
}
