import axios from "axios";
export default (form, callback) => {
  return dispatch => {
    axios({
      method: "get",
      url: "https://swapi.co/api/planets",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response=>{ 
        var data=response;
        console.log("actionresponse Sucess>>>>",data);
        dispatch({
            type:"SEARCH_SUCESS",
            searchAction:data
        });
    })
    .catch(error => {
        var data=error;
       console.log("actionresponse Failes>>>>>",data);
       dispatch({
            type:"SEARCH_Failed",
            searchAction:data
       });
    })
  };
};
