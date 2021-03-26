import React from "react";
import { Button } from "antd";

const BaseButton = ({ children, theme = "dark", onClick }) => {
    const styleList = {
        dark: {
            backgroundColor: "#000",
            color: "white",
        },
        light: {
            backgroundColor: "#fff",
            color: "#666",
        },
    };
    const handleClick = (e) => {
        onClick && onClick(e);
    };
    return (
        <Button style={styleList[theme]} onClick={handleClick}>
            {children}
        </Button>
    );
};

export default BaseButton;
