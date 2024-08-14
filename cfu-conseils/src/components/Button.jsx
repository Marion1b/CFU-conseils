import React from "react";

function Button({content, color}){
    return(
        <button className={"button-" + color}>{content}</button>
    )
}

export default Button;