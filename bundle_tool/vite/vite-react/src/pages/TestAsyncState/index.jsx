import React, { Component, useState } from "react";
import { Button } from "antd";

class ClassComp extends Component {
    state = {
        content: "初始内容",
    };
    handleClick = async () => {
        console.log("开始更改 class content", this.state.content);
        await this.setState({
            content: "更改后的内容",
        });
        console.log("更改后的 class content", this.state.content);
    };
    render() {
        return (
            <section>
                <h2>class async state test :</h2>
                <p>{this.state.content}</p>
                <Button onClick={this.handleClick}>更改内容</Button>
                <p>结论：class 组件的 setState 可以通过 async/await 进行阻塞，强制为同步调用。</p>
            </section>
        );
    }
}

const FuncComp = () => {
    const [content, setContent] = useState("初始内容");
    const handleClick = async () => {
        console.log("开始更改 func content", content);
        await setContent("更改后的内容");
        console.log("更改后的 func content", content);
    };

    return (
        <section>
            <h2>func async state test ：</h2>
            <p>{content}</p>
            <Button onClick={handleClick}>更改内容</Button>
            <p>结论：function 组件的 setState 不能通过 async/await 进行阻塞</p>
        </section>
    );
};

function TestAsyncState() {
    return (
        <section>
            <ClassComp />
            <FuncComp />
        </section>
    );
}

export default TestAsyncState;
