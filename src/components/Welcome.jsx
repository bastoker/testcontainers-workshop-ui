import UserService from "../services/UserService";

const Welcome = () => (
  <div className="jumbotron" style={{position: 'relative'}}>
    <h1>Vakantieplanner</h1>
    <p className="lead">Because we all deserve some time off, don't we?</p>
    <p>
      <button className="btn btn-lg btn-success" onClick={() => UserService.doLogin()}>Login</button>
    </p>
    <p>
    <img src="/calendar.svg" style={{position: 'relative', top: '-200px', float: 'right'}} height="200px" />
    </p>
  </div>
)

export default Welcome
