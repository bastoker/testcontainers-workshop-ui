import { BrowserRouter } from "react-router-dom";
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
          <Holidays/>
        </RenderOnAuthenticated>
      </div>
    </BrowserRouter>
);

export default App;
