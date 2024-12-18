import React from "react";
import { Link } from "react-router-dom";
import { usePaperContext } from "../../../context/PaperContext";
import { useTransactionHistory } from "../../../context/TransactionHistoryContext";
import "./StudentInfoPane.css";

function StudentInfoPane() {
  const { paperBalance } = usePaperContext(); // Use the context for paper balance
  const { transactionHistory } = useTransactionHistory(); // Use the context for transaction history

  // Example log history for printing
  const printHistory = [
    { date: "12-11-2024", pages: 40, location: "A5", printer: "HP LaserJet 1020" },
    { date: "10-11-2024", pages: 30, location: "B4", printer: "Canon Pixma G3010" },
    { date: "09-11-2024", pages: 20, location: "C4", printer: "Epson EcoTank L3110" },
  ];

  // Sort transaction history by date (most recent first)
  const sortedTransactionHistory = [...transactionHistory].sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-")); // Convert "dd-mm-yyyy" to "yyyy-mm-dd"
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB - dateA; // Sort descending
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        <i className="bi bi-gear me-2"></i>Thông tin tài khoản
      </h1>
      <div className="card mx-auto p-4 shadow-lg">
        <div className="row">
          <div className="col-4 text-center">
            <img
              src="https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg"
              alt="Avatar"
              className="img-fluid avatar mb-3"
            />
            <h3 className="fw-bold">Nguyễn Văn A</h3>
            <p className="text-muted">Sinh viên</p>
          </div>
          <div className="col-8">
            <h5 className="mb-3 section-title">Thông tin cá nhân</h5>
            <p>
              <strong>Email:</strong> nguyen.vana@hcmut.edu.vn
            </p>
            <p>
              <strong>MSSV:</strong> 2251234
            </p>
            <p>
              <strong>Vai trò:</strong> Sinh viên
            </p>
            <p>
              <strong>Số trang giấy còn lại:</strong>{" "}
              <span id="paperBalance" className="fw-bold text-success">
                {paperBalance}
              </span>{" "}
              trang
            </p>
            <Link to="/StudentHomePage/StudentBuyPaper">
              <button className="btn btn-primary" id="buyMorePagesBtn">
                <i className="bi bi-cart-plus me-2"></i> Mua thêm giấy
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card mt-4 p-3 shadow-lg">
        <h5 className="mb-3 section-title">Lịch sử thanh toán</h5>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Ngày</th>
              <th>Số tiền</th>
              <th>Số trang mua</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactionHistory.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{Number(transaction.amount).toLocaleString()} VND</td>
                <td>{transaction.pages} trang</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card mt-4 p-3 shadow-lg">
        <h5 className="mb-3 section-title">Lịch sử in ấn</h5>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Ngày</th>
              <th>Số trang in</th>
              <th>Tòa</th>
              <th>Mẫu máy in</th>
            </tr>
          </thead>
          <tbody>
            {printHistory.map((print, index) => (
              <tr key={index}>
                <td>{print.date}</td>
                <td>{print.pages} trang</td>
                <td>{print.location}</td>
                <td>{print.printer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentInfoPane;
