import React from "react";

const Button = (props) => {
    return (
        <button
            onClick={props.onClickFunc}
        >
            {props.text}
        </button>
    );
};

export default Button;