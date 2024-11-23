import React from "react";
import { Link } from "react-router-dom";
import Metadata from "../../Metadata/Metada";
import SPSONavBar from "../SPSONavBar/SPSONavbar";
import './SPSOSystemConfig.css'
import { useState } from "react";


function SPSOSystemConfig(){
    const [today, setToday] = useState(() => {
        const date = new Date();
        return date.toISOString().split("T")[0]; // Get date in YYYY-MM-DD format
    });


    return(
        <>
            <Metadata/>
            <SPSONavBar/>

            <div className="container-fluid mt-5">
                <h1 className="text-center mb-4"><i className="bi bi-sliders me-2"></i>Thiết lập hệ thống</h1>

                <div className="card card-body .custom-card-padding">
                    <form id="configForm">
                        <div className="mb-3">
                            <label for="defaultPages" className="form-label">Số trang in mặc định</label>
                            <input type="number" className="form-control" id="defaultPages" value="10" min="1"/>
                            <div id="paperError" className="invalid-feedback d-none" style={{ top: '100%' }}>
                                <i className="bi bi-exclamation-triangle-fill text-danger"></i> Vui lòng nhập số trang hợp lệ.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Kiểu tập tin chấp nhận</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="addNewFile" placeholder="Nhập kiểu tập tin"/>
                                <button type="button" className="btn btn-success" id ="buttonAdd" onclick="addType()">Thêm</button>
                            </div>
                            <ul className="list-group" id="fileTypeList"></ul>
                        </div>

                        <div className="mb-3">
                            <label for="allocationDate" className="form-label">Ngày cung cấp số trang</label>
                            <input type="date" className="form-control" id="allocationDate" value={today} onChange={(e) => setToday(e.target.value)}/>
                            <div id="dateError" className="invalid-feedback d-none" style={{ top: '100%' }}>
                                <i className="bi bi-exclamation-triangle-fill text-danger"></i> Vui lòng nhập ngày hợp lệ.
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary" onclick="update()">Cập nhật</button>
                    </form>
                </div>

                <div className="alert alert-success mt-3 d-none" id="configSuccess">
                    <strong>Dữ liệu đã được lưu thành công!</strong>
                </div>
            </div>
        </>
    )
}


export default SPSOSystemConfig