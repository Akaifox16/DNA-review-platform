import { useContext } from "react";
import { LoginContext } from "../context";

export const useLoginContext = () => useContext(LoginContext);