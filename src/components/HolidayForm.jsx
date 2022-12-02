import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import RenderOnRole from "./RenderOnRole";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";


const HolidayForm = () => {
  const [description, setDescription] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const history = useHistory();

  const axios = HttpService.getAxiosClient();
  const username = UserService.getUsername();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description || !from || !to) {
      console.log('Not al form fields are populated');
      alert('Alle velden zijn verplicht');
      return;
    }

    if (to < from) {
      console.log('Tot-datum ligt voor vanaf datum');
      alert('De minimale duur van een vakantie is 1 dag');
      return;
    }

    axios.post(
      `http://localhost:8080/holiday/${username}`, 
      {description, from, to}
    )
    .then((response) => {
      console.log(response.data)
      history.push("/")
    })
    .catch(function (error) {
      if (error.response.status === 409) {
        alert('Vakantie overlapt met een bestaande vakantie van een collega. Pech gehad :-(');
      }
    })
  };

  return (
    <>
    <div className="row">
      <div className="col-sm-6">
        <h2>Nieuwe vakantie toevoegen</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <form onSubmit={handleSubmit}>
          

          <div className="form-group">
            <label htmlFor="description">Omschrijving vakantie</label>
            <input id="description" type="text" className="form-control" placeholder="Omschrijving"
                   value={description} onChange={(e) => setDescription(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="from">Vanaf</label>
            <input id="from" type="date" className="form-control" placeholder="01/01/2022"
                   value={from} onChange={(e) => setFrom(e.target.value)}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="to">Tot</label>
            <input id="to" type="date" className="form-control" placeholder="02/22/2022"
                   value={to} onChange={(e) => setTo(e.target.value)}/>
          </div>

          <RenderOnRole roles={['user', 'superuser']}>
            <button type="submit" className="btn btn-primary">Vakantie toevoegen</button>
          </RenderOnRole>
        </form>
      </div>
    </div>
    </>
  );
}

export default HolidayForm;
