/* eslint-disable react/prop-types */
import "./Button.css"
import getButtonColor from "./ButtonHelper";

const Button = ({text, onClickHandler, styleType, children}) => {
    
  return (
    <button onClick={onClickHandler} className={`px-4 py-2 m-4 text-white ${getButtonColor(styleType)} rounded-md`}> {text || children}</button>
  )
}

export default Button;

