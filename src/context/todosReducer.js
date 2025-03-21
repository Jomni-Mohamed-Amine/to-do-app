function todoReducer(state, action) {
  if (action.type === "GET_ALL_TODOS") {
    return action.payload;
  }
  else if (action.type == "ADDTODO") {
    return [...state, action.payload];
  }
}
export default todoReducer;
