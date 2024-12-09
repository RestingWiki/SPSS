import React from "react";

const PrintLogs = ({ log, columnOrder }) => {
  return (
    <tr>
      {columnOrder.map((key, index) => (
        <td key={index}>{log[key]}</td>
      ))}
    </tr>
  );
};

export default PrintLogs;
