import http from "./index";



const getAlluser = async() => {
  var token = await localStorage.getItem('Auth')
  return http.get("emp/users", { headers: { "token": `${token}` } });
};

const getuserbyid = id => {
  return http.get(`/getdatabyid/${id}`);
};

const createuser = data => {
  return http.post("/postdata", data);
};

export default {
  getAlluser,
  getuserbyid,
  createuser
  };