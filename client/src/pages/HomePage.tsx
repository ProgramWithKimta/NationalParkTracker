import "../homepage.css";
import CommentForm from "../components/commentform";
import DisplayComment from "../components/displaycomment";

function HomePage () {
    return <>
    <div className="homepage">the search bar, photo of park, park info, comment div, comment box form goes here</div>
    <CommentForm />
    <DisplayComment />
    </>
}

export default HomePage;