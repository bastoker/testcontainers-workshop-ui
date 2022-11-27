import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: 'dummy value',
  realm: 'vakantieplanner',
  clientId: 'login-app'
};

let _kc = null;

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback, callbackWhenKeycloakIsFinished) => {
  const initKeycloakInner = () => {
    _kc.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      pkceMethod: 'S256',
    })
      .then((authenticated) => {
        if (!authenticated) {
          console.log("user is not authenticated..!");
        }
        onAuthenticatedCallback();
      })
      .catch(console.error);
  };

  const createKc = (url) => {
    console.log('Received Keycloak URL: ' + url);
    keycloakConfig["url"] = url;
    return new Keycloak(keycloakConfig);
  };
  
  fetch('http://localhost:8080/keycloak-url')
    .then(response => response.json())
    .then((data) => {
      console.log('Inside then: ' + data.keycloakUrl);
       _kc = createKc(data.keycloakUrl);
       console.log(_kc);
    })
    .then(() => initKeycloakInner())
    .then(() => callbackWhenKeycloakIsFinished());
};

const doLogin = () => _kc.login();

const doLogout = () => _kc.logout();

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};

export default UserService;
