import "./textErea.css"
import React from "react";

const TextErea = ({ row, col, name, input, text, callBack }) => {
    return (
        <div>
            <label for={name}>{text}</label>
            <textarea
                name={name}
                value={input || ""}
                // rows={row}
                // cols={col}
                onChange={(e) => callBack('fText', e.target.value)}
            />

        </div >
    );
};

export default TextErea;
