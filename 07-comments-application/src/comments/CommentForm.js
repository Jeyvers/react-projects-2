import { useState } from 'react';

function CommentForm({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
  updateComment,
}) {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText('');
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='comment-form-textarea'
      ></textarea>
      <button
        type='submit'
        className='comment-form-button'
        disabled={isTextareaDisabled}
      >
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type='button'
          className='comment-form-button comment-form-cancel-button'
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default CommentForm;
