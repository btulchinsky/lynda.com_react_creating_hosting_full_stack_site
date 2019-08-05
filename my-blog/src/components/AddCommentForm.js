import React, { useState } from 'react';

const AddCommentForm = () => {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        text: commentText
      })
    })
  }

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
      </label>
      <label>
        Comment:
        <input type="textarea" rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)}/>
      </label>
      <button>Add Comment</button>
    </div>
  );
}

export default AddCommentForm;