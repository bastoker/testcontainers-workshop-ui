import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";
import Moment from 'moment';

const HolidayDetails = () => {
  const axios = HttpService.getAxiosClient();
  const username = UserService.getUsername();
  const history = useHistory();

  const { holidayId } = useParams();
  const [holiday, setHoliday] = useState({id: holidayId, description: "", from: '', to: ''});

  const updateDescription = (d) => {
    setHoliday({...holiday, description: d})
  };
  const updateFrom = (d) => {
    setHoliday({...holiday, from: d})
  };
  const updateTo = (d) => {
    setHoliday({...holiday, to: d})
  };

  const refreshHoliday = () => {
    axios.get(`http://localhost:8080/holiday/${username}/${holidayId}`)
    .then((response) => {
      setHoliday(response.data)
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!holiday.description || !holiday.from || !holiday.to) {
      console.log('Not al form fields are populated');
      alert('Alle velden zijn verplicht');
      return;
    }

    if (holiday.to < holiday.from) {
      console.log('Tot-datum ligt voor vanaf datum');
      alert('De minimale duur van een vakantie is 1 dag');
      return;
    }

    axios.put(
      `http://localhost:8080/holiday/${username}/${holidayId}`, 
      holiday
    )
    .then((response) => {
      console.log(response.data)
    })
    .then(() => {
      history.push("/")
    });
  };

  useEffect(() => {
    console.log(holidayId);
    refreshHoliday();
  }, [holidayId]);

  return (
    <>
    <div className="row">
      <div className="col-sm-6">
        <h2>Vakantie aanpassen</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <form onSubmit={handleSubmit}>
          

          <div className="form-group">
            <label htmlFor="description">Author</label>
            <input id="description" type="text" className="form-control" placeholder="Omschrijving"
                   value={holiday.description} onChange={(e) => updateDescription(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="from">Vanaf</label>
            <input id="from" type="date" className="form-control" placeholder="01/01/2022"
                   value={holiday.from} onChange={(e) => updateFrom(e.target.value)}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="to">Tot</label>
            <input id="to" type="date" className="form-control" placeholder="02/22/2022"
                   value={holiday.to} onChange={(e) => updateTo(e.target.value)}/>
          </div>

          <button type="submit" className="btn btn-primary">Vakantie aanpassen</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default HolidayDetails;
