import http from "./index";


const login = data => {
  console.log(data)
  return http.post("emp/login", data);
};


const register = data => {
  return http.post("emp/register", data);
};

const user = async () => {
  var token = await localStorage.getItem('Auth')
  console.log(token)
  return http.get("emp/user", { headers: { "token": `${token}` } });
};

export default {
  login,
  register,
  user
};