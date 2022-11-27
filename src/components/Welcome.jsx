import UserService from "../services/UserService";

const Welcome = () => (
  <div className="jumbotron">
    <h1>Vakantieplanner</h1>
    <p className="lead">Klik hier om in te loggen:</p>
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
    </p>
  </div>
)

export default Welcome
