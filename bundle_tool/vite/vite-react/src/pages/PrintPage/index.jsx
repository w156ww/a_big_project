import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import PrintComp from "../../component/PrintComp";
import TempTable from "./TempTable";
import "./index.scss";
const dataSource = [
    {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
    },
    {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号",
    },
];

const columns = [
    {
        title: "姓名",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "年龄",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "住址",
        dataIndex: "address",
        key: "address",
    },
];
const PrintPage = () => {
    const [visible, setVisible] = useState(true);
    let iframe = null;
    const handlePrint = () => {
        setVisible(false);
        setTimeout(() => {
            window.print();
        });
    };
    const handleBeforePrint = (e) => {
        console.log("before print");
        console.log("e", e);
    };
    const handleAfterPrint = (e) => {
        console.log("after print");
        console.log("e", e);
        setVisible(true);
    };

    const closePrint = () => {
        document.body.removeChild(iframe);
    };

    const setPrint = () => {
        const CTW = iframe.contentWindow;
        CTW.onbeforeunload = closePrint;
        CTW.onafterprint = closePrint;
        CTW.focus();
        CTW.print();
    };

    const setIframeStyle = () => {
        iframe.style.position = "fixed";
        iframe.style.right = "0";
        iframe.style.bottom = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "0";
    };

    const setContainer = () => {
        const ctw = iframe.contentWindow;
        const ctw_doc = ctw.document;
        const div = document.crteateElement("div");
        div.id = "app";

        ctw_doc.body.appendChild();
    };

    const handlePrintTwo = (url) => {
        iframe = document.createElement("iframe");
        iframe.onload = setPrint;
        setIframeStyle();
        setContainer();
        document.body.appendChild(iframe);
    };

    useEffect(() => {
        addEventListener("beforeprint", handleBeforePrint);
        addEventListener("afterprint", handleAfterPrint);
    }, []);

    return (
        <div className="print-page">
            <section className="print-container">
                <h2>标题</h2>
                <p>第一行内容</p>
                <article>wenzhang</article>
            </section>
            <Button onClick={handlePrint}>方法一：打印界面</Button>
            <Button onClick={handlePrintTwo}>方法二：打印界面</Button>
            {visible ? null : <PrintComp></PrintComp>}
        </div>
    );
};

export default PrintPage;
