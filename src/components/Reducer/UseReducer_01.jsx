import { useReducer } from "react";
let initialState = {
  count: 0,
  showCountFlag: true,
};

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };
    case "substract":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "showCount":
      return { ...state, showCountFlag: !state.showCountFlag };

    default:
      return state;
  }
}

const UseReducer_01 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h1>Use Reducer Hook</h1>
      {state.showCountFlag ? <h3>Count is {state.count}</h3> : null}

      <div style={{ display: "flex", gap: "20px", justifiContent: "center" }}>
        <button onClick={() => dispatch({ type: "add" })}>
          Increase Count
        </button>
        <button onClick={() => dispatch({ type: "substract" })}>
          Decrease Count
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset Count</button>
        <button onClick={() => dispatch({ type: "showCount" })}>
          Show Count
        </button>
      </div>
      
    </div>
  );
};

export default UseReducer_01;
