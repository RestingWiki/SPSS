import React from "react";

const TogglePrinter = ({ printer, onToggle, onRemove }) => {
  const isEnabled = printer.status === "enabled";

  return (
    <tr>
      <td>{printer.id}</td>
      <td>{printer.model}</td>
      <td>{printer.location}</td>
      <td>
        <span className={`status-box ${isEnabled ? "status-enabled" : "status-disabled"}`}>
          {isEnabled ? "Bật" : "Tắt"}
        </span>
      </td>
      <td>
        <button className="btn btn-sm btn-warning" onClick={() => onToggle(printer.id)}>
          {isEnabled ? "Tắt" : "Bật"}
        </button>
        <button
          className="btn btn-sm"
          style={{ color: "white", backgroundColor: "rgb(104, 109, 118)" }}
          onClick={() => onRemove(printer.id)}
        >
          <i className="bi bi-trash"></i> Gỡ
        </button>
      </td>
    </tr>
  );
};

export default TogglePrinter;
