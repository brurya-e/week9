import "./inputText.css"
import React from "react";

const InputText = ({ name, input, text, callBack, ref}) => {
    console.log(ref)
    return (
        <div>
            <label for={name}>{text}</label>
            <input
                ref={(e)=>ref(e)}
                type={"text"}
                name={name}
                value={input || ""}
                onChange={(e) => callBack(e.target.value)}
            />

        </div >
    );
};

export default InputText;
