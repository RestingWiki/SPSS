import React from 'react';
import './LoginSelectionPane.css';
import { Link } from 'react-router-dom';

function LoginSelectionPane() {
    return (
        <div className='pane'>
            <div className="content">
                <div className="card login-card text-center">
                    <div className="logo">
                        <img
                            src="https://hcmut.edu.vn/img/nhanDienThuongHieu/01_logobachkhoasang.png"
                            alt="Logo"
                        />
                    </div>
                    <h3 className="mb-4">Đăng nhập với tư cách</h3>
                    <Link to='/LoginPage'>
                        <button type="button" className="btn btn-success login-button my-2">
                                <i className="bi bi-person-fill-check me-1"></i> Quản trị viên
                        </button>
                    </Link>

                    <Link to='/StudentLoginPage'>
                        <button type="button" className="btn btn-primary login-button my-2">
                            <i className="bi bi-person-fill me-1"></i> Sinh viên
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default LoginSelectionPane;
