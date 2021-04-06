import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import CustomComp from "./CustomHook";

const HookComp = () => {
    const [comp, setComp] = useState("");
    const buttonList = [{ name: "CustomHook", id: "CustomHook" }];

    const handleClick = (item) => {
        setComp(item.id);
    };

    const render = () => {
        switch (comp) {
            case "CustomHook": {
                return <CustomComp />;
            }
            default: {
                return null;
            }
        }
    };

    return (
        <section>
            <h2>hook Comp</h2>
            {buttonList.map((item) => (
                <Button key={item.id} onClick={() => handleClick(item)}>
                    {item.name}
                </Button>
            ))}
            {render()}
        </section>
    );
};

export default HookComp;
