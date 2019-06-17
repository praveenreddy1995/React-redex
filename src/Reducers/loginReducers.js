export default (state = [], action) => {
  switch (action.type) {
    case "LOGIN_SUCESS":
      return {
        ...state,
        login_sucess: action.loginAction.data,
        error: null
      };
    case "LOGIN_Failed":
      return {
        ...state,
        login_failed: action.loginAction,
        error: null
      };
      default:
          return state;
  }
};
