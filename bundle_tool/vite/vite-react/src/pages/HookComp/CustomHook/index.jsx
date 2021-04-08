import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

function CustomComp() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    const handleClick = () => {
        setCount((prevCountRef) => ++prevCountRef);
        setTimeout(() => {
            console.log("change prevCount", prevCount);
            console.log("change count", count);
        }, 2000);
    };
    const getCount = () => {
        console.log("count", count);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            // 这里调用 getCount 打印的值为 count 的初始值。
            getCount();
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section>
            <h2>测试 state 的闭包问题</h2>
            <p>
                current: {count}, prev: {prevCount}
            </p>
            <Button onClick={handleClick}>{count}</Button>
            <Button onClick={getCount}>getCount</Button>
        </section>
    );
}

export default CustomComp;
