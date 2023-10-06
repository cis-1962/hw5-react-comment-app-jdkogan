import React, { useState } from 'react';
import Voter from './Voter';
import { CommentType } from './CommentType';

export default function Comment({
  comment,
  setComments,
  isReply = false,
}: {
  comment: CommentType;
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
  isReply?: boolean;
}) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [showReply, setShowReply] = useState(false);

  const handleReply = () => {
    if (name && content) {
      comment.replies.push({ name, content, replies: [] });
      setComments((prevComments) => [...prevComments]);
      setName('');
      setContent('');
      setShowReply(false);
    }
  };

  return (
    <div className={`comment ${isReply ? 'isReply' : ''} wrap-text`}>
      <div style={{ marginLeft: isReply ? '20px' : '0px' }}>
        {comment.name}: {comment.content}
        <Voter />
        <button type="button" onClick={() => setShowReply(!showReply)}>
          Reply
        </button>
        {showReply && (
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Reply"
            />
            <button type="button" onClick={handleReply}>
              Post Reply
            </button>
          </div>
        )}
        {comment.replies.map((reply) => (
          <Comment
            key={`${reply.name}_${reply.content}`}
            comment={reply}
            setComments={setComments}
            isReply
          />
        ))}
      </div>
    </div>
  );
}
