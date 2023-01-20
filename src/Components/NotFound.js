import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="classNotFound">
            <h2>Sorry</h2>
            <p>That page can not be found</p>
            <Link to="/">Click it go to main page</Link>
        </div>
    );
}
export default NotFound;