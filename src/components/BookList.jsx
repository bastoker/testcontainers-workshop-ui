import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookList = () => {

  const [books, setBooks] = useState([{id: '123', title: 'Dummy Book Title', author: 'Dummy author'}]);

  const deleteBook = (book) => {
    // save book here
  };

  useEffect(() => {
    // retrieve items here
  }, []);
  
  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Books to Read Before You Die</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.author}</td>
              <td>
                <button className="btn btn-xs btn-danger" onClick={() => deleteBook(book)}>
                  Delete Book
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList;
