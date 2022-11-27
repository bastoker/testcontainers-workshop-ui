import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({title: 'Tijdelijke titel', author: 'Tijdelijke auteur'});

  useEffect(() => {
    // retrieve books here?
   
  }, [bookId]);

  return book ? (
    <div className="row">
      <div className="col-sm-12">
        <h1>Details for Book ID {book.id}</h1>
        <hr/>
        <h3>Author</h3>
        <p className="lead">{book.title}</p>
        <h3>Title</h3>
        <p className="lead">{book.author}</p>
        <hr/>
        <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default BookDetails;
