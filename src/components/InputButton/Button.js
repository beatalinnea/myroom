/** @jsxImportSource @emotion/react */

import { buttonStyle } from "./Button.css"

const Button = ({buttonText, onClick, buttonColor}) => {

    return <button css={buttonStyle(buttonColor)} onClick={onClick}>{buttonText}</button>

}

export default Button