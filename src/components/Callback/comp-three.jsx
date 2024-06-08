/* eslint-disable react/prop-types */

import { memo } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const Child = ({ text, onClick }) => {
  console.log("Child is rendered", text);
  return <button onClick={onClick}>{text}</button>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Child);
