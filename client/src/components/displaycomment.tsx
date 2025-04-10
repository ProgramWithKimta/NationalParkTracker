type Props = {
  comments?: { comment: string }[];
};

const DisplayComment = ({ comments  = [] }: Props) => {
  return (
    <div className="display-comm-box" style={{ marginLeft:"20px"}}>
      <h4 style={{ marginLeft:"20px", marginTop:"0"}}>Park Comments</h4>
      <ul id="comment-list" className="display-comment">
        {comments.map((c, index) => (
          <li key={index}>{c.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayComment;