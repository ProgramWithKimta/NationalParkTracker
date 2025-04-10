type Props = {
  comments?: { comment: string }[];
};

const DisplayComment = ({ comments  = [] }: Props) => {
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