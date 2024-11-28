import React from 'react';
import { Link } from 'react-router-dom';
import './SPSONavBar.css'


const SPSONavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">
        <Link to="/SPSOHomePage" className="navbar-brand d-flex align-items-center">
          <img
            src="https://hcmut.edu.vn/img/nhanDienThuongHieu/01_logobachkhoasang.png"
            alt="Logo"
            width={60}
            height={50}
            className="Logo d-inline-block"
          />
          <span className="function fs-5 fw-bold me-3">Trang chủ</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-1">
                        <Link to='/SPSOHomePage' class="nav-link text-white"><i class="bi bi-house-door me-2"></i>Trang chủ</Link>
                    </li>
                    <li class="nav-item mx-1">
                        <Link to='/SPSOHomePage/SPSODashboard' class="nav-link text-white"><i class="bi bi-grid me-2"></i>Bảng điều khiển</Link>
                    </li>
                    <li class="nav-item mx-1">
                        <Link to='/SPSOHomePage/SPSOLogs' class="nav-link text-white"><i class="bi bi-clock me-2"></i>Lịch sử in</Link>
                    </li>
                    <li class="nav-item mx-1">
                        <Link to='/SPSOHomePage/SPSOPrinterManagement' class="nav-link text-white" ><i class="bi bi-tools me-2"></i>Quản lý máy in</Link>
                    </li>
                    <li class="nav-item mx-1">
                        <Link to='/SPSOHomePage/SPSOSystemConfig' class="nav-link text-white" ><i class="bi bi-sliders me-2"></i>Thiết lập hệ thống</Link>
                    </li>
                </ul>
    
                <div class="ms-auto d-flex align-items-center">
                    <span class="text-white me-3">
                        <i class="bi bi-person-circle me-1"></i>Chào mừng quay trở lại, <strong>SPSO!</strong>
                    </span>
                    <Link to='/HomePage' class="btn btn-outline-light" href="#">
                    <i class="bi bi-box-arrow-right me-1">
                    </i>Đăng xuất
                    </Link>
                </div>
        </div>
      </div>
    </nav>
  );
};

export default SPSONavBar;
