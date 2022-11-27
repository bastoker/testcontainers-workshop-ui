import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import RenderOnRole from "./RenderOnRole";

const BookForm = () => {

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!author || !title) {
      return;
    }
    // save item here with REST call
    // and subsequently call 
    // () => history.push("/")
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Add a new book:</h1>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" className="form-control" placeholder="Author"
                   value={author} onChange={(e) => setAuthor(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" placeholder="Title"
                   value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <RenderOnRole roles={['user']}>
            <button type="submit" className="btn btn-primary">Add book</button>
          </RenderOnRole>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
