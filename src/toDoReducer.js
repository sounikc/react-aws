const todoReducer = (todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { id, taskname, isCompleted } = action.payload;
            return (
                [
                    ...todos, {
                        id: id,
                        taskname: taskname,
                        isCompleted: isCompleted
                    }
                ]
            )
        case 'REMOVE_TODO':
            return (
                [...todos].filter((todo) => {
                    return todo != action.payload
                })
            )
        case 'MARK_TODO':
            const todoItems = [...todos];
            todoItems[action.payload.id].isCompleted = true;
            return todoItems;
        default:
            return todos;
    }
}

export default todoReducer;