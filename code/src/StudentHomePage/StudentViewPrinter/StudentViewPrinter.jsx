import React from 'react';
import { Link } from 'react-router-dom';
import Metadata from '../../Metadata/Metada';
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import { useConnectedPrinters } from "../../context/PrinterContext"; // Import context
import Footer from '../../Footer/Footer';
function StudentViewPrinter() {
  const { connectedPrinters } = useConnectedPrinters(); // Access connected printers from context

  return (
    <>
      <Metadata />
      <StudentNavBar />
      <div className="container-fluid mt-5">
        <h1 className="text-center mb-4">
          <i className="bi bi-printer me-2"></i>Xem máy in
        </h1>
        <img 
          src="https://oisp.hcmut.edu.vn/academic-affairs/wp-content/uploads/2021/08/MAP-3D-01-scaled.jpg" 
          alt="Map" 
          style={{ width: '100%' }} 
        />
        <h3 className="text-info mb-3">
          <i className="bi bi-link-45deg me-2"></i>Số máy in đã kết nối
        </h3>
        <table className="table table-hover text-center">
          <thead className="table-primary">
            <tr>
              <th>
                <i className="bi bi-hash me-1"></i> ID Máy in
              </th>
              <th>
                <i className="bi bi-printer me-1"></i>Mô hình
              </th>
              <th>
                <i className="bi bi-geo-alt-fill me-1"></i>Tòa
              </th>
              <th>
                <i className="bi bi-toggle-on me-1"></i>Trạng thái
              </th>
            </tr>
          </thead>
          <tbody>
            {connectedPrinters.map((printer) => (
              <tr key={printer.id}>
                <td>{printer.id}</td>
                <td>{printer.model}</td>
                <td>{printer.location}</td>
                <td>
                  <span className={`status-box ${printer.status === "enabled" ? "status-enabled" : "status-disabled"}`}>
                    {printer.status === "enabled" ? "Bật" : "Tắt"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
}

export default StudentViewPrinter;
