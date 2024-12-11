import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-0">
      <div className="container-fluid py-2">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex mt-2">
            <img
              className="me-0"
              src="https://hcmut.edu.vn/img/nhanDienThuongHieu/01_logobachkhoasang.png"
              alt="Bách Khoa Logo"
              width="80"
              height="60"
            />
            <div>
              <p className="mb-1 small fw-bold" style={{ fontSize: '13px' }}>
                ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH
              </p>
              <p className="mb-0 fw-bold" style={{ fontSize: '1.1rem' }}>
                TRƯỜNG ĐẠI HỌC BÁCH KHOA
              </p>
              <div className="mt-4">
                <h6 className="text-uppercase fw-bold mb-1">Hệ Thống In Bách Khoa</h6>
                <p className="small mb-0">
                  Phát triển bởi Khoa CNTT và Truyền thông, Đại học Bách Khoa.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6 className="text-uppercase fw-bold mt-3">Liên hệ</h6>
            <ul className="list-unstyled small">
              <li className="mt-1">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Cơ sở 1: 268 Lý Thường Kiệt, phường 14, Quận 10, TP. HCM
              </li>
              <li className="mt-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Cơ sở 2: Cơ sở Dĩ An – Khu đô thị Đại học Quốc Gia TP. HCM, Quận Thủ Đức, TP. HCM
              </li>
              <li className="mt-2">
                <i className="bi bi-telephone-fill me-2"></i>+84 28 1234 5678
              </li>
              <li className="mt-2">
                <i className="bi bi-envelope-fill me-2"></i>support@hcmut.edu.vn
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
