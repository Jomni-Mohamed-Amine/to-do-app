export function getAllTodos(param) {
  return { type: "GET_ALL_TODOS", payload: param };
}
export function addTodoAction(param) {
  return { type: "ADDTODO", payload: param };
}