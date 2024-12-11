import React, { useState } from "react";
import Metadata from "../../Metadata/Metada";
import SPSONavBar from "../SPSONavBar/SPSONavbar";
import { useFileTypes } from "../../context/FileTypesContext"; // Import the useFileTypes hook
import './SPSOSystemConfig.css';
import Footer from "../../Footer/Footer";

function SPSOSystemConfig() {
    const [today, setToday] = useState(() => {
        const date = new Date();
        return date.toISOString().split("T")[0]; // Get date in YYYY-MM-DD format
    });

    const { fileTypes, setFileTypes } = useFileTypes(); // Use the context for file types
    const [newFileType, setNewFileType] = useState(""); // Input value for new file type

    // Add new file type
    const addType = () => {
        if (newFileType.trim() !== "" && !fileTypes.includes(newFileType)) {
            setFileTypes([...fileTypes, newFileType]);
            setNewFileType("");
        }
    };

    // Remove a file type from the list
    const removeType = (type) => {
        setFileTypes(fileTypes.filter((fileType) => fileType !== type));
    };

    return (
        <>
            <Metadata />
            <SPSONavBar />

            <div className="container-fluid mt-5">
                <h1 className="text-center mb-4"><i className="bi bi-sliders me-2"></i>Thiết lập hệ thống</h1>

                <div className="card card-body .custom-card-padding">
                    <form id="configForm">
                        <div className="mb-3">
                            <label htmlFor="defaultPages" className="form-label">Số trang in mặc định</label>
                            <input type="number" className="form-control" id="defaultPages" defaultValue="10" min="1" />
                            <div id="paperError" className="invalid-feedback d-none" style={{ top: '100%' }}>
                                <i className="bi bi-exclamation-triangle-fill text-danger"></i> Vui lòng nhập số trang hợp lệ.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Kiểu tập tin chấp nhận</label>
                            <div className="input-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="addNewFile" 
                                    placeholder="Nhập kiểu tập tin"
                                    value={newFileType}
                                    onChange={(e) => setNewFileType(e.target.value)}
                                />
                                <button 
                                    type="button" 
                                    className="btn btn-success" 
                                    onClick={addType}
                                >
                                    Thêm
                                </button>
                            </div>
                            <ul className="list-group" id="fileTypeList">
                                {fileTypes.map((type, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        {type}
                                        <button 
                                            type="button" 
                                            className="btn btn-sm btn-danger" 
                                            onClick={() => removeType(type)}
                                        >
                                            Xóa
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="allocationDate" className="form-label">Ngày cung cấp số trang</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="allocationDate" 
                                value={today} 
                                onChange={(e) => setToday(e.target.value)} 
                            />
                            <div id="dateError" className="invalid-feedback d-none" style={{ top: '100%' }}>
                                <i className="bi bi-exclamation-triangle-fill text-danger"></i> Vui lòng nhập ngày hợp lệ.
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary" onClick={() => alert("Cập nhật thành công!")}>
                            Cập nhật
                        </button>
                    </form>
                </div>

                <div className="alert alert-success mt-3 d-none" id="configSuccess">
                    <strong>Dữ liệu đã được lưu thành công!</strong>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default SPSOSystemConfig;
