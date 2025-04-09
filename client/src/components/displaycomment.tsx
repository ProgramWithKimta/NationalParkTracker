// use effect to call on the API
import { useEffect, useState } from "react";
import { retrieveComments } from "../api/commentsAPI";

const DisplayComment = () => {
        const [comments, setComments] = useState<{ comment: string }[]>([]);
    useEffect(() => {
        async function getComments() {
            const data = await retrieveComments();
            setComments(data);
        }
        getComments();
    }, [])
    return (
      <div className="display-comm-box">
        <h4>Park Reviews</h4>
        <ul id="comment-list" className="display-comment">
          {comments.map((c, index) => (
            <li key={index}>{c.comment}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DisplayComment;
