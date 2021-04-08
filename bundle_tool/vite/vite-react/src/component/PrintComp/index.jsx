import React, { useState, useEffect, useRef } from "react";
import { Table } from "antd";
import "./index.scss";

let stop = false;
const PrintComp = ({ dataSource, index = 0 }) => {
    const [tableData, setTableData] = useState([]);
    const [idx, setIdx] = useState(index);
    const AFourRef = useRef();
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

    const renderContent = () => {
        return (
            <section className="print-wrapper">
                <Table dataSource={tableData} columns={columns} pagination={false} />
            </section>
        );
    };

    const calcContainerHeight = () => {
        const ele = AFourRef.current;
        const wrapper = ele.children[0];
        const height = ele.clientHeight;
        const wrapperH = wrapper.clientHeight;
        return wrapperH < height;
    };

    useEffect(() => {
        if (stop) return;
        if (calcContainerHeight()) {
            setTableData((prevData) => [...prevData, dataSource[idx]]);
            setIdx((pre) => ++pre);
        } else {
            stop = true;
            setIdx((pre) => --pre);
            setTableData((prevData) => {
                const data = [...prevData];
                console.log("length", data.length);
                data.pop();
                console.log("data.length", data.length);
                return data;
            });
        }
    }, [tableData, idx]);

    // useEffect(() => {
    //     if (dataSource?.length > 0) {
    //         setTableData((prevData) => [...prevData, dataSource[idx++]]);
    //     }
    // }, [dataSource]);

    return (
        <div className="print-comp">
            <section className="AFourSize" ref={AFourRef}>
                {renderContent()}
            </section>
            {/* <section className="print-wrapper">
                <Table dataSource={dataSource} columns={columns} pagination={false} />
            </section> */}
        </div>
    );
};

export default PrintComp;
