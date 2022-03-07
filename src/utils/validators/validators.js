import React from "react";

export const required = values => {
    if(values) return undefined;
    return "Required";
}

export const maxLengthCreator = (maxlength) => (values) => {
    if(values.length > maxlength) return `Max length ${maxlength} symbols`;
    return undefined;
}