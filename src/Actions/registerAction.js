import axios from "axios";
export default (form) => {
    console.log("i am here da>>>>>>>>>",JSON.stringify(form));
  return dispatch => {
    axios({
      method: "post",
      url: "http://localhost:9012/api_rest/register.php",
      //url: "http://192.168.5.143:9012/angular-php-app/backend/api/create.php",
      data:form,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response=>{
        var data=response;
        console.log("action Register Rsponse Sucess>>>>",data);
        dispatch({
            type:"REGISTER_SUCESS",
            registerAction:data
        });
    })
    .catch(error => {
        var data=error;
       console.log("actionresponse Failes>>>>>",data);
       dispatch({
            type:"REGISTER_Failed",
            registerAction:data
       });
    })
  };
};
