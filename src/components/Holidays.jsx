import { Route, Switch } from "react-router-dom";
import HolidayDetails from "./HolidayDetails";
import HolidayForm from "./HolidayForm";
import HolidayList from "./HolidayList";
import AllHolidayList from "./AllHolidayList";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
import RolesRoute from "./RolesRoute";

const Holidays = () => (
  <>
    <Menu/>
    <Switch>
      <Route exact path="/">
        <HolidayList/>
      </Route>
      <Route exact path="/holiday/new">
        <HolidayForm/>
      </Route>
      <Route path="/holiday/:holidayId">
        <HolidayDetails/>
      </Route>
      <Route path="/holidays/all"> {/*       <RolesRoute path="/holidays/all" roles={['superuser']}> */}
        <AllHolidayList/>
      </Route>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Switch>
  </>
)

export default Holidays;
