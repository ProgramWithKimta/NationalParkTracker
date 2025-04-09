import { useState, FormEvent, ChangeEvent } from "react";
import { addComment } from "../api/commentsAPI";   // Import the function to add comment from the API

const CommentForm = () => {
  const [commentData, setCommentData] = useState({
    comment: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Call the parent function to add the comment
      const data = await addComment(commentData);
      console.log('Comment added successfully:', data); 
      // Reload the page to reflect the new feedback
      // window.location.reload();
    } catch (err) {
      console.error('Failed to add feedback', err);  // Log any errors that occur
    }
  };

  return (
    <section className="comment-form">
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        id="comment-form"
        onSubmit={handleSubmit}  // Attach the submit handler
      >
        <div className="col-12">
          <textarea
            name="comment"
            placeholder="got a comment?"
            value={commentData.comment}
            className="form-input w-100"
            onChange={handleChange}></textarea>
        </div>
        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </section>
  )
};

export default CommentForm;
