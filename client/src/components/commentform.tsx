import { useState, FormEvent, ChangeEvent } from "react";
import { addComment } from "../api/commentsAPI";   // Import the function to add comment from the API

// Define the CommentForm component
const CommentForm = () => {
  // State to manage the feedback form data
  const [commentData, setCommentData] = useState({
    comment: ''
  });

  // Handle changes in the input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Send the comment data to the server
      const data = await addComment(commentData);
      // Reload the page to reflect the new feedback
      window.location.reload();
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
          {/* Textarea for user comment */}
          <textarea
            name="comment"
            placeholder="got a comment?"
            value={commentData.comment}
            className="form-input w-100"
            onChange={handleChange}  // Attach the change handler
          ></textarea>
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
