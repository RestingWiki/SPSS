import React from "react";

const ConnectPrinter = ({ printer, onConnect }) => {
  return (
    <tr>
      <td>{printer.model}</td>
      <td>{printer.location}</td>
      <td>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => onConnect(printer.id)}
        >
          <i className="bi bi-link-45deg"></i> Kết nối
        </button>
      </td>
    </tr>
  );
};

export default ConnectPrinter;
