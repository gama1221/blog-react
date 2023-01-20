import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Api from "./Api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';

const BlogDetails = () => {
    const [deleteBlog, setDeleteBlog] = useState("");
    const { id } = useParams();
    const api = Api().api;
    const history = useHistory();
    const { data: blog, isPending, error } = useFetch(`${api}/${id}`);
    const handleBlogDeletion = () => {
        if (window.confirm('Need to delete?')) {
            fetch(`${api}/${blog.id}`, {
                method: "DELETE"
            }).then(() => {
                setDeleteBlog("Deleted");
                setTimeout(() => {
                    history.push("/");
                }, 1000)
            })
        } else {
            this.onCancel(blog);
        }
    }
    return (
        <div className="blog-details">
            <h2>Blog details</h2>
            {error && <div className="error"> {error} </div>}
            {isPending && <div className="loader" >{isPending}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p style={{ color: "green" }}>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <Button variant="danger" className="btn btn-sm" onClick={handleBlogDeletion} data-togle="tooltip" title="Click it to delete the blog"><i className="fa fa-trash text-white"> Delete </i></Button>{' '}
                    {deleteBlog && <p className="add">{deleteBlog}</p>}            
                </article>
            )}
        </div>
    );
}
export default BlogDetails;