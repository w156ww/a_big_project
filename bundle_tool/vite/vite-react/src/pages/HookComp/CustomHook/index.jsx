import React, { useState, useEffect } from "react";
import { Button } from "antd";

function CustomComp() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount((prevCount) => ++prevCount);
    };
    const getCount = () => {
        console.log("count", count);
    };
    useEffect(() => {
        setInterval(() => {
            getCount();
        }, 3000);
    }, []);

    return (
        <section>
            <h2>测试 state 的闭包问题</h2>
            <Button onClick={handleClick}>{count}</Button>
            <Button onClick={getCount}>getCount</Button>
        </section>
    );
}

export default CustomComp;
