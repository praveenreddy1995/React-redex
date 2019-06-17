export default (state = [], action) => {
    switch (action.type) {
      case "REGISTER_SUCESS":
        return {
          ...state,
          register_sucess: action.registerAction.data,
          error: null
        };
      case "REGISTER_Failed":
        return {
          ...state,
          register_failed: action.registerAction,
          error: null
        };
        default:
            return state;
    }
  };
  