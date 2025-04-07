// use effect to call on the API
import { useEffect, useState } from "react";
import { retrieveComments } from "../api/commentsAPI";

const DisplayComment= () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        async function getComments() {
            const data = await retrieveComments()
            setComments(data);
        }
        getComments();
    }, []) 
    return <div className="display-comm-box">
        {comments.map((c: {comment: string}) => {
            return (
            <div>
            <p className="display-comment"> {c.comment} </p>
            </div>    
            )
        })}
    </div>
}

export default DisplayComment;