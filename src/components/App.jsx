import { BrowserRouter } from "react-router-dom";
import BookBox from "../components/BookBox";
import RenderOnAnonymous from "./RenderOnAnonymous";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import Holidays from "./Holidays";
import Welcome from "./Welcome";

const App = () => (
  <BrowserRouter>
      <div className="container">
        <RenderOnAnonymous>
          <Welcome/>
        </RenderOnAnonymous>
        <RenderOnAuthenticated>
          <Holidays/>{/* <BookBox/> */}
        </RenderOnAuthenticated>
      </div>
    </BrowserRouter>
);

export default App;
