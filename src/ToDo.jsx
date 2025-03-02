import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./toDoReducer";

const ToDo = () => {
  let inititalState = {
    items: [],
    loading: false,
  };
  const API_URL = import.meta.env.VITE_AWS_API_URL;
  const [currentTodo, setCurrentTodo] = useState();
  const [todos, dispatch] = useReducer(todoReducer, inititalState);
  const addTodos = async () => {
    const data = {
      id: todos.items.length + 1,
      taskname: currentTodo,
      isCompleted: false,
      created_at: new Date().getTime(),
    };
    const main_payload = {
      TableName: "TodosTable",
      Item: data,
    };
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(main_payload),
    };
    try {
      const fetchResponse = await fetch(API_URL,
        settings
      );
      const response_data = await fetchResponse.json();
      console.log('response_data--->',response_data)
      if (response_data && response_data.$metadata && response_data.$metadata.httpStatusCode === 200) {
        dispatch({
          type: "ADD_TODO",
          payload: data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const markTodo = (e) => {
    // console.log(e.target.dataset.id);
    dispatch({ type: "MARK_TODO", payload: { id: e.target.dataset.id } });
  };
  const removeTodo = async (item) => {
    const payload = {
      TableName: 'TodosTable'
    };
    const main_payload = {
      ...payload,
      Key: {
        id: item.id,
        created_at: item.created_at
      }
    }
    const settings = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(main_payload),
    };

    try {
      const fetchResponse = await fetch(API_URL,
        settings
      );
      const response_data = await fetchResponse.json();
      console.log('response_data_delete--->',response_data)
      if (response_data && response_data.$metadata && response_data.$metadata.httpStatusCode === 200) {
        dispatch({ type: "REMOVE_TODO", payload: item });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(
        `${API_URL}?TableName=TodosTable`
      );
      const body = await response.json();
      dispatch({
        type: "SET_INITIAL_TODO",
        payload: body.Items,
      });
      console.log(body);
    };
    callApi();
  }, []);
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
          {todos && todos.items && todos.items.map((item, index) => {
            return (
              <div key={index}>
                {!item.isCompleted && (
                  <input type="checkbox" onChange={markTodo} data-id={index} />
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
                <span onClick={() => removeTodo(item)}>Delete</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ToDo;
