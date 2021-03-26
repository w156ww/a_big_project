import React from "react";
import { Table } from "antd";

const TempTable = ({ dataSource, columns }) => {
    return <Table dataSource={dataSource} columns={columns} />;
};

export default TempTable;
