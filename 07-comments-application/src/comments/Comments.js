import { useEffect } from 'react';
import { useState } from 'react';
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from '../api';
import Comment from './Comment';
import CommentForm from './CommentForm';

function Comments({ currentUserId }) {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        //   Sorts replies in ascended order
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  const addComment = (text, parentId) => {
    console.log('addComment', text, parentId);
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([...backendComments, comment]);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to remove this comment?')) {
      deleteCommentApi(commentId).then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className='comments'>
      <h3 className='comments-title'>Comments</h3>
      <div className='comments-container'>
        <div className='comment-form-title'>Write comment</div>
        <CommentForm submitLabel='Write' handleSubmit={addComment} />
        {rootComments.map((rootComment) => (
          <Comment
            {...rootComment}
            key={rootComment.id}
            // lazyloading? lazylading?
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            updateComment={updateComment}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
