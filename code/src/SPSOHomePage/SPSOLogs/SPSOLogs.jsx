import React, { useState } from "react";
import Metadata from "../../Metadata/Metada";
import SPSONavBar from "../SPSONavBar/SPSONavbar";
import PrintLogs from "./PrintLogs";
import "./SPSOLogs.css";
import logsData from "./logsData"; // Import the logsData

function SPSOLogs() {
  const [activeTab, setActiveTab] = useState("student");
  const [studentFilter, setStudentFilter] = useState("");
  const [printerFilter, setPrinterFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 3; // Number of logs per page

  const columnOrderStudent = [
    "MSSV",
    "FullName",
    "PrinterID",
    "PrinterModel",
    "DateTime",
    "TotalPage",
    "Location",
  ];

  const columnOrderPrinter = [
    "PrinterID",
    "PrinterModel",
    "MSSV",
    "FullName",
    "DateTime",
    "TotalPage",
    "Location",
  ];

  // Filter logs for the student tab
  const filteredStudentLogs = logsData.filter(
    (log) =>
      log.MSSV.toLowerCase().includes(studentFilter.toLowerCase()) ||
      log.FullName.toLowerCase().includes(studentFilter.toLowerCase())
  );

  // Filter logs for the printer tab
  const filteredPrinterLogs = logsData.filter(
    (log) =>
      log.PrinterID.toLowerCase().includes(printerFilter.toLowerCase()) ||
      log.PrinterModel.toLowerCase().includes(printerFilter.toLowerCase())
  );

  // Determine the current logs and column order
  const currentLogs =
    activeTab === "student" ? filteredStudentLogs : filteredPrinterLogs;
  const columnOrder =
    activeTab === "student" ? columnOrderStudent : columnOrderPrinter;

  // Pagination logic
  const totalPages = Math.ceil(currentLogs.length / logsPerPage);
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const paginatedLogs = currentLogs.slice(indexOfFirstLog, indexOfLastLog);

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination justify-content-center">
          {currentPage > 1 && (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                &laquo; Prev
              </button>
            </li>
          )}
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => setCurrentPage(number)}>
                {number}
              </button>
            </li>
          ))}
          {currentPage < totalPages && (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next &raquo;
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  };

  return (
    <>
      <Metadata />
      <SPSONavBar />
      <div className="container-fluid mt-5">
        <h1 className="text-center mb-4">
          <i className="bi bi-clock me-2"></i>Lịch sử in
        </h1>

        {/* Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "student" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("student");
                setCurrentPage(1);
              }}
            >
              Theo sinh viên
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "printer" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("printer");
                setCurrentPage(1);
              }}
            >
              Theo máy in
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "student" && (
            <div className="tab-pane fade show active">
              <div className="card card-body">
                <h3 className="text-secondary mb-3">
                  <i className="bi bi-person me-2"></i>Lọc theo sinh viên
                </h3>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Tìm kiếm theo MSSV hoặc tên..."
                  value={studentFilter}
                  onChange={(e) => setStudentFilter(e.target.value)}
                />
                <table className="table table-hover text-center">
                  <thead>
                    <tr>
                      {columnOrder.map((col, index) => (
                        <th key={index}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedLogs.map((log, index) => (
                      <PrintLogs key={index} log={log} columnOrder={columnOrder} />
                    ))}
                  </tbody>
                </table>
                {renderPagination()}
              </div>
            </div>
          )}

          {activeTab === "printer" && (
            <div className="tab-pane fade show active">
              <div className="card card-body">
                <h3 className="text-secondary mb-3">
                  <i className="bi bi-printer me-2"></i>Lọc theo máy in
                </h3>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Tìm kiếm theo ID hoặc mẫu máy in..."
                  value={printerFilter}
                  onChange={(e) => setPrinterFilter(e.target.value)}
                />
                <table className="table table-hover text-center">
                  <thead>
                    <tr>
                      {columnOrder.map((col, index) => (
                        <th key={index}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedLogs.map((log, index) => (
                      <PrintLogs key={index} log={log} columnOrder={columnOrder} />
                    ))}
                  </tbody>
                </table>
                {renderPagination()}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SPSOLogs;
