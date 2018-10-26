export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: Math.random(),
        payload: action.payload,
      };

      return [
        ...state,
        newTodo,
      ];
    default:
      return state;
  }
}
