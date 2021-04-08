import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import CustomComp from "./CustomHook";
import MemoComp from "./MemoComp";

const HookComp = () => {
    const [comp, setComp] = useState("");
    const buttonList = [
        { name: "blank", id: "blank" },
        { name: "CustomHook", id: "CustomHook" },
        { name: "MemoComp", id: "MemoComp" },
    ];

    const handleClick = (item) => {
        setComp(item.id);
    };

    const render = () => {
        switch (comp) {
            case "CustomHook": {
                return <CustomComp />;
            }
            case "MemoComp": {
                return <MemoComp />;
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
