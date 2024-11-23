import React, { useState } from "react";
import Metadata from "../../Metadata/Metada";
import SPSONavBar from "../SPSONavBar/SPSONavbar";
import PrintLogs from "./PrintLogs";
import "./SPSOLogs.css";
import logsData from "./LogsData"; // Import the logsData
function SPSOLogs() {
    const [activeTab, setActiveTab] = useState("student");
    const [studentFilter, setStudentFilter] = useState("");
    const [printerFilter, setPrinterFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const logsPerPage = 3; // Number of logs per page

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

    // Pagination logic
    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;

    const currentStudentLogs = filteredStudentLogs.slice(indexOfFirstLog, indexOfLastLog);
    const currentPrinterLogs = filteredPrinterLogs.slice(indexOfFirstLog, indexOfLastLog);

    const renderPagination = () => {
        const totalPages = Math.ceil(
            (activeTab === "student" ? filteredStudentLogs.length : filteredPrinterLogs.length) /
            logsPerPage
        );

        const maxPageNumbersToShow = 5; // Number of pages to display in pagination
        const halfMaxPages = Math.floor(maxPageNumbersToShow / 2);

        let startPage = Math.max(1, currentPage - halfMaxPages);
        let endPage = Math.min(totalPages, currentPage + halfMaxPages);

        if (currentPage <= halfMaxPages) {
            endPage = Math.min(totalPages, maxPageNumbersToShow);
        } else if (currentPage + halfMaxPages >= totalPages) {
            startPage = Math.max(1, totalPages - maxPageNumbersToShow + 1);
        }

        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    {/* First page button */}
                    {currentPage > 1 && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(1)}>
                                &laquo; First
                            </button>
                        </li>
                    )}

                    {/* Previous page button */}
                    {currentPage > 1 && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                                &lsaquo; Prev
                            </button>
                        </li>
                    )}

                    {/* Page numbers */}
                    {startPage > 1 && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(startPage - 1)}>
                                ...
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

                    {endPage < totalPages && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(endPage + 1)}>
                                ...
                            </button>
                        </li>
                    )}

                    {/* Next page button */}
                    {currentPage < totalPages && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                                Next &rsaquo;
                            </button>
                        </li>
                    )}

                    {/* Last page button */}
                    {currentPage < totalPages && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(totalPages)}>
                                Last &raquo;
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
                            <i className="bi bi-person-fill me-1"></i> Theo sinh viên
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
                            <i className="bi bi-printer-fill me-1"></i> Theo máy in
                        </button>
                    </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content">
                    {activeTab === "student" && (
                        <div className="tab-pane fade show active">
                            <div className="card card-body mb-4">
                                <h3 className="text-secondary mb-3">
                                    <i className="bi bi-person me-2"></i>Lọc theo sinh viên
                                </h3>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Tìm kiếm theo tên hoặc MSSV..."
                                    value={studentFilter}
                                    onChange={(e) => setStudentFilter(e.target.value)}
                                />
                                <table className="table table-hover text-center">
                                    <thead>
                                        <tr>
                                            <th>MSSV</th>
                                            <th>Họ và Tên</th>
                                            <th>ID máy in</th>
                                            <th>Mẫu máy in</th>
                                            <th>Thời gian in</th>
                                            <th>Số trang</th>
                                            <th>Tòa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentStudentLogs.map((log, index) => (
                                            <PrintLogs key={index} {...log} />
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
                                    placeholder="Tìm kiếm theo mã máy in hoặc mẫu máy in..."
                                    value={printerFilter}
                                    onChange={(e) => setPrinterFilter(e.target.value)}
                                />
                                <table className="table table-hover text-center">
                                    <thead>
                                        <tr>
                                            <th>ID máy in</th>
                                            <th>Mẫu máy in</th>
                                            <th>MSSV</th>
                                            <th>Họ và Tên</th>
                                            <th>Thời gian in</th>
                                            <th>Số trang</th>
                                            <th>Tòa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentPrinterLogs.map((log, index) => (
                                            <PrintLogs key={index} {...log} />
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
