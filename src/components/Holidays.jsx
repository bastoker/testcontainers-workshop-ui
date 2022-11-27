import { Route, Switch } from "react-router-dom";
import HolidayDetails from "./HolidayDetails";
import BookForm from "./HolidayForm";
import HolidayList from "./HolidayList";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
import RolesRoute from "./RolesRoute";
import SecretBooks from "./SecretBooks";

const Holidays = () => (
  <>
    <Menu/>
    <Switch>
      <Route exact path="/">
        <HolidayList/>
      </Route>
      <Route exact path="/books/new">
        <BookForm/>
      </Route>
      <Route path="/holiday/:holidayId">
        <HolidayDetails/>
      </Route>
      <RolesRoute path="/secret" roles={['admin']}>
        <SecretBooks/>
      </RolesRoute>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Switch>
  </>
)

export default Holidays;
