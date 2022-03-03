import Axios from "axios";

// Set auth header
const SetAuthToken = (token) => {
  if (token) Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete Axios.defaults.headers.common["Authorization"];
};

export default SetAuthToken;