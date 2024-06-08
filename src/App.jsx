import "./App.css";
import UseCallback_01 from "./components/Callback/UseCallback_01";
import RegisterContext from "./components/Context/RegisterContext";
import ThemeContext from "./components/Context/ThemeContext";
import UseContext_01 from "./components/Context/UseContext_01";
import UseEffect_01 from "./components/Effect/UseEffect_01";
import UseCustomFetch from "./components/Fetch/UseCustomFetch";
//import UseFetch_01 from "./components/Fetch/UseFetch_01";
import UseLayoutEffect_01 from "./components/Layout/UseLayoutEffect_01";
import UseMemo_01 from "./components/Memo/UseMemo_01";
import UseReducer_01 from "./components/Reducer/UseReducer_01";
import UseRef_01 from "./components/Ref/UseRef_01";
import UseState_01 from "./components/State/UseState_01";

function App() {
  return (
    <>
      <UseState_01 />
      <br></br>
      <br></br>
      <UseEffect_01 />
      <br></br>
      <br></br>
      <UseReducer_01 />
      <br></br>
      <br></br>
      <UseContext_01 />
      <div
        style={{
          display: "flex",
          gap: "80px",
          justifyContent: "center",
          color: "#F8FFD2",
        }}
      >
        <ThemeContext />
        <RegisterContext />
      </div>
      <br></br>
      <br></br>
      <UseRef_01 />
      <br></br>
      <br></br>
      <UseLayoutEffect_01 />
      <br></br>
      <br></br>
      <UseMemo_01/>
      <br></br>
      <br></br>
      <UseCallback_01 />
      <br></br>
      <br></br>
      <UseCustomFetch />
    </>
  );
}

export default App;
