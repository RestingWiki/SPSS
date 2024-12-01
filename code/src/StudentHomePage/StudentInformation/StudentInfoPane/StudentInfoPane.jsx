import './StudentInfoPane.css';
import React from 'react';
import { Link } from 'react-router-dom';
function StudentInfoPane(){
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
                            <strong>Số trang giấy còn lại:</strong>{' '}
                            <span id="paperBalance" className="fw-bold text-danger">
                                0
                            </span>{' '}
                            trang
                        </p>
                        <Link to='/StudentHomePage/StudentBuyPaper'>
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
                        <tr>
                            <td>10-10-2024</td>
                            <td>50,000 VND</td>
                            <td>25 trang</td>
                        </tr>
                        <tr>
                            <td>05-10-2024</td>
                            <td>30,000 VND</td>
                            <td>15 trang</td>
                        </tr>
                        <tr>
                            <td>01-10-2024</td>
                            <td>20,000 VND</td>
                            <td>10 trang</td>
                        </tr>
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
                        <tr>
                            <td>12-11-2024</td>
                            <td>40 trang</td>
                            <td>A5</td>
                            <td>HP LaserJet 1020</td>
                        </tr>
                        <tr>
                            <td>10-11-2024</td>
                            <td>30 trang</td>
                            <td>B4</td>
                            <td>Canon Pixma G3010</td>
                        </tr>
                        <tr>
                            <td>09-11-2024</td>
                            <td>20 trang</td>
                            <td>C4</td>
                            <td>Epson EcoTank L3110</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default StudentInfoPane;