export default (state = [], action) => {
    switch (action.type) {
      case "SEARCH_SUCESS":
        return {
          ...state,
          search_sucess: action.searchAction,
          error: null
        };
      case "SEARCH_Failed":
        return {
          ...state,
          search_failed: action.searchAction,
          error: null
        };
        default:
            return state;
    }
  };
  