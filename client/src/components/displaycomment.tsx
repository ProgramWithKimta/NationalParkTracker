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
    return <div>
        {comments.map((c: {comment: string}) => {
            return (
            <div>
                <p> {c.comment}
                </p>
            </div>    
            )
        })}
    </div>
}

export default DisplayComment;