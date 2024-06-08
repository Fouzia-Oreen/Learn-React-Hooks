import { useContext } from "react";
import { GlobalContext } from "../Context";

const ThemeContext = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h3>Theme</h3>

      <button
        style={
          theme === "dark"
            ? { backgroundColor: "#8ADAB2", color: "#DF826C" }
            : { backgroundColor: "#8ADAB2", color: "black" }
        }
      >
        {" "}
        Login{" "}
      </button>
    </div>
  );
};

export default ThemeContext;
