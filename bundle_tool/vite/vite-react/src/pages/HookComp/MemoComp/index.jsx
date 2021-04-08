import React, { useState, useEffect } from "react";
import { Button } from "antd";

const Pear = React.memo(() => {
    console.log("pear render");
    return <p>this is a pear</p>;
});

const Apple = () => {
    console.log("apple render");
    return (
        <section>
            <p>this is a apple</p>
        </section>
    );
};

const MemoComp = () => {
    const [money, setMoney] = useState(1);
    const addMoney = () => {
        setMoney((prevMoney) => 2 * prevMoney);
    };
    return (
        <section>
            <h2>memo comp</h2>
            <Apple />
            <Pear money={money} />
            <p>money: {money}</p>
            <Button onClick={addMoney}>加钱</Button>
        </section>
    );
};

export default MemoComp;
