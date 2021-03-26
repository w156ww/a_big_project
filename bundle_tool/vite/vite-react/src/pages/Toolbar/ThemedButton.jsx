import React, { useReducer } from "react";
import BaseButton from "../../component/BaseButton";
import { ThemeContext } from "../../context";

const ThemedButton = () => {
    return (
        <ThemeContext.Consumer>
            {(context) => {
                return <BaseButton theme={context.theme}>toolbar</BaseButton>;
            }}
        </ThemeContext.Consumer>
    );
};

export default ThemedButton;
