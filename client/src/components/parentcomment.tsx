import { useEffect, useState } from "react";
import { retrieveComments, addComment } from "../api/commentsAPI";
import DisplayComment from "./displaycomment"
import CommentForm from "./commentform";

const CommentSection = () => {
  const [comments, setComments] = useState<{ comment: string }[]>([]);

  useEffect(() => {
    async function fetchComments() {
      const data = await retrieveComments();
      setComments(data);
    }
    fetchComments();
  }, []);

  // Function passed to CommentForm to handle new comment
  const handleAddComment = async (commentData: { comment: string }) => {
    const data = await addComment(commentData); // Call API
    setComments(prev => [...prev, data]); // Update state immediately
  };

  return (
    <>
      <CommentForm onAddComment={handleAddComment} />
      <DisplayComment comments={comments} />
    </>
  );
};

export default CommentSection;