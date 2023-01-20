import { useState } from "react";
import { useHistory } from "react-router-dom";

import Api from "./Api";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [add, setAdd] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    //create blog object
    const blog = { title, body, author };
    const api = Api();
    setIsPending(true);
    fetch(api.api,
      {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(blog)
      }
    ).then(() =>{
      setAdd("new blog has addedd successfully");
      setIsPending(false);
      setTimeout(()=>{
        // history.go(-1);
        //or 
        history.push("/");
      }, 1000)
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input autoFocus
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required />
        <label>Blog Body:</label>
        <textarea
          type="text"
          onChange={(e) => setBody(e.target.value)}
          required />
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required>
          <option value="">--Select author--</option>
          <option value="getinet">Getinet</option>
          <option value="facebook">Facebook</option>
          <option value="snapchat">Snap Chat</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled >Add <i className="loader"></i></button> }
        <h5>{ add && <div className="add">{add}</div> }</h5>
      </form>
    </div>
  );
}

export default Create;