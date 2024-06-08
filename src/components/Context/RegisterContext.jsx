import { useContext } from "react";
import { GlobalContext } from "../Context";


const RegisterContext = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h3>Register</h3>

      <button
        style={
          theme === "dark"
            ? { backgroundColor: "#FEAE6F", color: "#01204E" }
            : { backgroundColor: "#006989", color: "#F3F7EC" }
        }
      >
        {" "}
        Login{" "}
      </button>
    </div>
  );
}

export default RegisterContext
