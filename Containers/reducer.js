let products = [{
    ID: 1,
    Name: "Dayan",
    Age: 190
  }];
  const reducer = (state = {list: products}, action ) => {
    switch (action.type){
      case "GET_LIST_SUCCESS_FULFILLED":
        state = {
            ...state,
            list: action.payload
        };
        break;
    }
    return state;
  };
  
  export default reducer;