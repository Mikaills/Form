import { useContext, useState } from "react"
import { darkTheme, lightTheme } from "./icons";
import { ThemeContext } from "../Context/ThemeContext";



function Themelcon(props) {
  

  const {themeName, handleTheme} = useContext(ThemeContext)
  console.log(themeName)
  
 
  return (
    <>
      {
      themeName === "light" ? 
        <button onClick={handleTheme} className="btn"> {lightTheme} Light</button>
       : (
        <button onClick={handleTheme} className="btn"> {darkTheme} Dark </button>
      )}
    </>
  );
}

export default Themelcon;
