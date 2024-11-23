import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">
        <Link to="/HomePage" className="navbar-brand d-flex align-items-center">
          <img
            src="https://hcmut.edu.vn/img/nhanDienThuongHieu/01_logobachkhoasang.png"
            alt="Logo"
            width={60}
            height={50}
            className="Logo d-inline-block"
          />
          <span className="function fs-5 fw-bold me-3">Trang chủ</span>
        </Link>
        <Link to="/LoginSelectionPage" className="btn btn-outline-light">
        <i class="bi bi-person-circle me-2"></i>
          Đăng nhập
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
