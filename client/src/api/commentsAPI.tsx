import { CommentData } from "../interfaces/CommentData";


// This function sends a GET request to the '/api/comment' endpoint to fetch
// comment data. It handles errors by logging them to the console and returns
// an empty array if an error occurs.
const retrieveComments = async () => {
    try {
        const response = await fetch('/api/comment', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid user API response, check network tab!');
        }

        return data;

    } catch (err) {
        console.log('Error from data retrieval:', err);
        return [];
    }
}


// This function sends a POST request to the '/api/comment/' endpoint with the
// comment data provided in the body. It handles errors by logging them to the
// console and returns a rejected promise if an error occurs.

const addComment = async (body: CommentData) => {
    try {
        const response = await fetch(
            '/api/comment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
        )
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }

        return data;

    } catch (err) {
        console.log('Error from Comment Creation: ', err);
        return Promise.reject('Could not create comment');
    }
}
export default { retrieveComments, addComment };
