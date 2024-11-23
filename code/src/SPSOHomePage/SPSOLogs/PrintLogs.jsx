import React from "react";

const PrintLogs = (log) =>{
    return (
        <tr>
            <td>{log.MSSV}</td>
            <td>{log.FullName}</td>
            <td>{log.PrinterID}</td>
            <td>{log.PrinterModel}</td>
            <td>{log.DateTime}</td>
            <td>{log.TotalPage}</td>
            <td>{log.Location}</td>
        </tr>
    )
}


export default PrintLogs