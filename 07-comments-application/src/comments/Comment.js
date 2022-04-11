import CommentForm from './CommentForm';

function Comment({
  id,
  userId,
  username,
  body,
  createdAt,
  replies,
  currentUserId,
  addComment,
  deleteComment,
  activeComment,
  updateComment,
  setActiveComment,
  parentId = null,
}) {
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === userId;
  const canDelete = currentUserId === userId;
  const createdWhen = new Date(createdAt).toLocaleDateString();
  const isReplying =
    activeComment &&
    activeComment.type === 'replying' &&
    activeComment.id === id;

  const isEditing =
    activeComment &&
    activeComment.type === 'editing' &&
    activeComment.id === id;

  const replyId = parentId ? parentId : id;
  return (
    <div className='comment'>
      <div className='comment-image-container'>
        <img src='/user-icon.png' alt='' />
      </div>
      <div className='comment-right-part'>
        <div className='comment-content'>
          <div className='comment-author'>{username}</div>
          <div>{createdWhen}</div>
        </div>
        {!isEditing && <div className='comment-text'>{body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel={'Update'}
            hasCancelButton
            initialText={body}
            handleSubmit={(text) => updateComment(text, id)}
            handleCancel={() => setActiveComment(null)}
          />
        )}
        <div className='comment-actions'>
          {' '}
          {canReply && (
            <div
              className='comment-action'
              onClick={() => setActiveComment({ id, type: 'replying' })}
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className='comment-action'
              onClick={() => setActiveComment({ id, type: 'editing' })}
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div className='comment-action' onClick={() => deleteComment(id)}>
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel='Reply'
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className='replies'>
            {replies.map((reply) => (
              <Comment
                {...reply}
                key={reply.id}
                replies={[]}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                addComment={addComment}
                setActiveComment={setActiveComment}
                parentId={id}
                activeComment={activeComment}
                updateComment={updateComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
