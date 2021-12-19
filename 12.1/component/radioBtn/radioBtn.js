import "./radioBtn.css"
import React from "react";

const RadioBtn = ({ text,checkedFlage,onChange}) => {
    return (
        <div>
            <input
                type={"radio"}
                name={text}
                checked ={checkedFlage}
                onChange ={()=>{onChange(text)}}
            />
            <label for={text}>{text}</label>
        </div >
    );
};

export default RadioBtn;
