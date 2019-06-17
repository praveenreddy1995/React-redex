import axios from "axios";
export default (form, callback) => {
  return dispatch => {
    axios({
      method: "get",
      url: "http://localhost:9012/api_rest/read.php",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response=>{
        var data=response;
        console.log("actionresponse Sucess>>>>",data);
        dispatch({
            type:"LOGIN_SUCESS",
            loginAction:data
        });
    })
    .catch(error => {
        var data=error;
       console.log("actionresponse Failes>>>>>",data);
       dispatch({
            type:"LOGIN_Failed",
            loginAction:data
       });
    })
  };
};
