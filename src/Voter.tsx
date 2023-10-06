import React, { useState } from 'react';

export default function Voter() {
  const [votes, setVotes] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setVotes(votes + 1)}>
        Upvote
      </button>
      {votes}
      <button type="button" onClick={() => setVotes(votes - 1)}>
        Downvote
      </button>
    </div>
  );
}
