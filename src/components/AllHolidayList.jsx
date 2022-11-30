import { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";
import Moment from 'moment';

const transformToFlatList = (memberWithHolidaysList) => 
  memberWithHolidaysList.flatMap(
    (mwh) => mwh.holidays.map(
      (h) => (
        {
          colleagueName: mwh.member.name,
          id: h.id,
          description: h.description,
          from: h.from,
          to: h.to
        }
      )
    )
  );

const AllHolidayList = () => {
  Moment.locale('nl');
  const axios = HttpService.getAxiosClient();
  const username = UserService.getUsername();
  const history = useHistory();
  const [holidays, setHolidays] = useState(
    [
      {
          colleagueName: 'sam', 
          id: -1,
          description: 'My Summer Holiday',
          from: new Date('2011-07-10'), 
          to: new Date('2011-08-2')
      }
    ]);

  const refreshListOfHolidays = () => {
    axios.get(`http://localhost:8080/holiday/all`)
    .then((response) => {
      setHolidays(transformToFlatList(response.data));
    });
  };

  const deleteHoliday = (holiday) => {
    axios.delete(
      `http://localhost:8080/holiday/${username}/${holiday.id}`
    )
    .then((response) => {
      console.log('status of delete-holiday endpoint: ' + response.status)
    })
    .then(() => {
      refreshListOfHolidays();
    });
  };


useEffect(() => {
    refreshListOfHolidays();
  }, []);
  
  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Alle vakanties</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>Naam collega</th>
            <th>ID</th>
            <th>Omschrijving</th>
            <th>Van</th>
            <th>Tot</th>
            <th>Acties</th>
          </tr>
          </thead>
          <tbody>
          {holidays.map((holiday) => (
            <tr key={holiday.id}>
              <td>{holiday.colleagueName}</td>
              <td>{holiday.id}</td>
              <td><Link to={`/holiday/${holiday.id}`}>{holiday.description}</Link></td>
              <td>{Moment(holiday.from).format('D MMMM YYYY')}</td>
              <td>{Moment(holiday.to).format('D MMMM YYYY')}</td>
              <td>
                <button className="btn btn-xs btn-danger" onClick={() => deleteHoliday(holiday)}>
                  Verwijder vakantie
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

export default AllHolidayList;
