import { useContext } from "react";
import ColorContext from "../index";
function Header(props) {
  const color = useContext(ColorContext);
  console.log({ color });
  return <header className="bg-red-400">This is the header {color}</header>;
}
export default Header;
