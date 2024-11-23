import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPane.css'; 

function LoginPane() {
    return (
        <div className="pane">
            <div className="content">
                <div className="card login-card">
                    <div className="text-center mb-7 logo">
                        <img
                            src="https://hcmut.edu.vn/img/nhanDienThuongHieu/01_logobachkhoasang.png"
                            alt="Logo"
                        />
                    </div>
                    <h3 className="text-center mb-4">Đăng Nhập</h3>
                    <form id="loginForm">
                        <div className="mb-3 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Tên đăng nhập"
                                required
                            />
                            <div id="usernameError" className="invalid-feedback">
                                Vui lòng nhập tên đăng nhập.
                            </div>
                        </div>

                        <div className="mb-3 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-lock-fill"></i>
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Mật khẩu"
                                required
                            />
                            <div id="passwordError" className="invalid-feedback">
                                Vui lòng nhập mật khẩu.
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="rememberMe"
                                />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Ghi nhớ đăng nhập
                                </label>
                            </div>
                            <a href="#" className="text-muted">
                                Quên mật khẩu?
                            </a>
                        </div>

                        <Link to='/SPSOHomePage'>
                            <button type="button" className="btn btn-primary w-100">
                                Đăng Nhập
                            </button>
                        </Link>
     

                        <div className="alert alert-danger mt-3 d-none" id="loginError">
                            <strong>Đăng nhập thất bại!</strong> Thông tin đăng nhập không chính xác.
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPane;
