// export const initializer = (inititalState) => {
//   const defaultTodos = [
//     { id: 0, taskname: "!!Say Good Morning to all!! ", isCompleted: false },
//     { id: 1, taskname: "Give VitD3 Medicine!! ", isCompleted: false },
//     { id: 2, taskname: "Provide Body Lotion!! ", isCompleted: false },
//     { id: 3, taskname: "Wash Feeding Bottle!! ", isCompleted: false },
//     { id: 4, taskname: "Give Tofu Bath!! ", isCompleted: false },
//     { id: 5, taskname: "Give Tofu Zyncovit!! ", isCompleted: false },
//   ];
//   return { ...inititalState, items: defaultTodos };
// };

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_TODO":
      return { ...state, items: action.payload };
    case "ADD_TODO":
    //   const { id, taskname, isCompleted } = action.payload;
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        items: state.items.filter((item) => {
            return item.id != action.payload.id;
        })
      }
    // case "MARK_TODO":
    //   const todoItems = [...todos];
    //   todoItems[action.payload.id].isCompleted = true;
    //   return todoItems;
    default:
      return todos;
  }
};
