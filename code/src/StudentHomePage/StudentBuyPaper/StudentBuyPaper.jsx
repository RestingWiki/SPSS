import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Metadata from '../../Metadata/Metada';
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import './StudentBuyPaper.css';

function StudentBuyPaper(){
    const [pageCount, setPageCount] = useState(1);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [receipt, setReceipt] = useState({ pages: 0, totalPrice: 0, date: '' });

    const pricePerPage = 2000;
    const totalPrice = pageCount * pricePerPage;

    const handlePageCountChange = (e) => {
        setPageCount(parseInt(e.target.value, 10));
    };

    const handleBuy = () => {
        const newBalance = currentBalance + pageCount;
        setCurrentBalance(newBalance);

        // Prepare receipt data
        const date = new Date();
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        setReceipt({
            pages: pageCount,
            totalPrice: pricePerPage * pageCount,
            date: today,
        });

        setShowModal(true); // Show the modal
    };

    const handleClose = () => {
        setShowModal(false);
    };
    


    return(
        <>
            <Metadata/>
            <StudentNavBar/> 
            <div className="container mt-5">
                <h1 className="text-center mb-4"><i className="bi bi-cart-plus me-2"></i>Mua thêm giấy</h1>
                <p className="text-center mb-4 fs-4 text-muted">
                    Giá: 2.000 VND/trang.
                </p>
                <div className="mx-auto p-4 shadow card-buy-paper" style={{ maxWidth: "600px" }}>
                    <div className="mb-3 text-center fs-5">
                        <strong>Số trang hiện tại:</strong>{" "}
                        <span className={`fs-4 fw-bold ${currentBalance > 0 ? "text-success" : "text-danger"}`}>
                            {currentBalance}
                        </span>{" "}
                        trang
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="pageCountInput" className="form-label fs-5">
                                <i className="bi bi-file-text me-2"></i>Số trang muốn mua:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="pageCountInput"
                                value={pageCount}
                                min="1"
                                onChange={handlePageCountChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label fs-5">
                                <i className="bi bi-currency-exchange me-2"></i>Tổng giá trị:
                            </label>
                            <div id="price" className="fs-4 fw-bold text-success">
                                {totalPrice.toLocaleString()} VND
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={handleBuy}
                            >
                                <i className="bi bi-cart-check me-2"></i>Mua ngay
                            </button>
                            <button type="button" className="btn btn-secondary w-100">
                                <i className="bi bi-x-circle me-2"></i>Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Biên lai mua giấy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Số trang mua:</strong> {receipt.pages} trang</p>
                    <p><strong>Tổng giá:</strong> {receipt.totalPrice.toLocaleString()} VND</p>
                    <p><strong>Phương thức thanh toán:</strong> BKPay</p>
                    <p><strong>Ngày giao dịch:</strong> {receipt.date}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default StudentBuyPaper