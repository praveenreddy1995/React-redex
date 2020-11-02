
import axios from "axios";
import {updateState} from "../Store/index"
  
export function loginAction(test){
   return axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts/1/comments",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response=>{ 
        var data=response.data;
        updateState(
            "login",
            state =>({
                ...state,
                loginInfo:data
            }),
            "LOGIN"
        )
        console.log("loginAction Response Sucess>>>>",data);
       
    })
    .catch(error => {
        var data=error;
       console.log("loginAction Response Failes>>>>>",data);
      
    })
} 

export function registerAction(form){
      axios({
        method: "post",
        url: "http://localhost:9012/react-redux-rest-API/register.php",
        //url: "http://192.168.5.143:9012/angular-php-app/backend/api/create.php",
        data:form,
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response=>{ 
        var data=response;
        updateState(
            "register",
            state =>({
                ...state,
                loginInfo:data
            }),
            "REGISTER"
        )
        console.log("registerAction Response Sucess>>>>",data);
       
    })
    .catch(error => {
        var data=error;
       console.log("registerAction Response Failes>>>>>",data);
      
    })
}