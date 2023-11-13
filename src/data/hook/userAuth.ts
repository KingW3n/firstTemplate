import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const userAuth = () => useContext(AuthContext)

export default userAuth