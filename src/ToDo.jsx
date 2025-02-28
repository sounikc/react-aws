import { useReducer, useState } from "react";
import todoReducer from "./toDoReducer";

const ToDo = () => {
    const inititalState = [];
    const init = (inititalState) => {
        return [...inititalState, {id: 0, taskname: '!!Say Good Morning to all!! ', isCompleted: false}]
    }
    const [currentTodo, setCurrentTodo] = useState();
    const [todos, dispatch] = useReducer(todoReducer, inititalState, init);
    console.log(todos);
    const addTodos = () => {
        dispatch({ type: "ADD_TODO", payload: { id: todos.length + 1, taskname: currentTodo, isCompleted: false } })
    }
    const markTodo = (e) => {
        // console.log(e.target.dataset.id);
        dispatch({ type: "MARK_TODO", payload: { id: e.target.dataset.id } })
    }
    const removeTodo = (item) => {
        dispatch({ type: "REMOVE_TODO", payload: item })
    }
    return (
        <>
            <div>
                <input
                    type="text"
                    value={currentTodo}
                    onChange={(e) => setCurrentTodo(e.target.value)}
                    onBlur={addTodos}
                    name="todo"
                />

                <div>
                    {todos.map((item, index) => {
                        return (
                            <div key={index}>
                                {!item.isCompleted && (
                                    <input type="checkbox" onChange={markTodo} data-id = {index}/>
                                )}
                                {item.isCompleted ? (
                                    <span
                                        style={{
                                            textDecorationLine: "line-through",
                                            textDecorationStyle: "solid",
                                        }}
                                    >
                                        {item.taskname}
                                    </span>
                                ) : (
                                    <span>{item.taskname}</span>
                                )}
                                <span onClick={() => removeTodo(item)}>
                                    Delete
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default ToDo;