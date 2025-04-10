import { useState, FormEvent, ChangeEvent } from "react";

type Props = {
  onAddComment: (comment: { comment: string }) => void;
};

const CommentForm = ({ onAddComment }: Props) => {
  const [commentData, setCommentData] = useState({ comment: '' });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await onAddComment(commentData); // Pass new comment up
      setCommentData({ comment: '' }); // Clear input
    } catch (err) {
      console.error('Failed to add feedback', err);
    }
  };

  return (
    <section className="comment-form">
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        id="comment-form"
        onSubmit={handleSubmit}
      >
        <div className="col-12" style={{ marginLeft:"20px"}}>
          <textarea
            name="comment"
            placeholder="got a comment?"
            value={commentData.comment}
            className="form-input w-100"
            onChange={handleChange}></textarea>
        </div>
        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit" style={{marginLeft:"20px"}}>
            Add Comment
          </button>
        </div>
      </form>
    </section>
  )
};

export default CommentForm;
