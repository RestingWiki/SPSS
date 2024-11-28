import React, { useEffect, useState, useRef } from 'react';
import Metadata from "../../Metadata/Metada";
import SPSONavBar from "../SPSONavBar/SPSONavbar";
import './SPSODashboard.css'
import Chart from 'chart.js/auto';

const SPSODashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [tableData, setTableData] = useState([]);
  const [recentRequests, setRecentRequests] = useState([]);
  const chartRef = useRef(null);

  // Update the report when state changes
  useEffect(() => {
    fetchReportData(selectedYear);
    fetchRecentRequests();
    updateChart();
    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, [selectedYear]);

  // Fetch data for the main report table
  const fetchReportData = (year) => {
    const data = [
      {
        printerModel: 'Epson EcoTank L3110',
        building: 'A5',
        pagesPrinted: 8000, // Adjusted
        totalRevenue: 8000 * 240, // Updated price per page
      },
      {
        printerModel: 'Canon PIXMA TR8520',
        building: 'A5',
        pagesPrinted: 7200, // Adjusted
        totalRevenue: 7200 * 240, // Updated price per page
      },
      {
        printerModel: 'HP LaserJet 1020',
        building: 'B2',
        pagesPrinted: 6000, // Adjusted
        totalRevenue: 6000 * 240, // Updated price per page
      },
      {
        printerModel: 'HP Envy 5055',
        building: 'B2',
        pagesPrinted: 5500, // Adjusted
        totalRevenue: 5500 * 240, // Updated price per page
      },
      {
        printerModel: 'Lexmark MS431DN',
        building: 'B10',
        pagesPrinted: 3000, // Adjusted
        totalRevenue: 3000 * 240, // Updated price per page
      },
      {
        printerModel: 'Brother MFC-L2750DW',
        building: 'C4',
        pagesPrinted: 4200, // Adjusted
        totalRevenue: 4200 * 240, // Updated price per page
      },
      {
        printerModel: 'Epson EcoTank L3110',
        building: 'C4',
        pagesPrinted: 3597, // Adjusted
        totalRevenue: 3597 * 240, // Updated price per page
      },
    ];
  
    setTableData(data);
  };
  
  

  // Fetch data for the "Recent Requests" table
  const fetchRecentRequests = () => {
    const requests = [
      {
        id: "2252512", // Matches MSSV
        name: "Nguyễn Minh Nhi",
        time: "21-10-2024 - 10:15 AM", // Matching logsData DateTime
        fileSize: "1.2 MB",
        printerModel: "Epson EcoTank L3110",
        building: "A5",
        status: "Hoàn tất",
        badgeClass: "bg-success",
      },
      {
        id: "2252534", // Matches MSSV
        name: "Trần Đức Hòa",
        time: "22-10-2024 - 9:45 AM", // Matching logsData DateTime
        fileSize: "2.5 MB",
        printerModel: "Canon PIXMA TR8520",
        building: "A5",
        status: "Đang xử lý",
        badgeClass: "bg-warning",
      },
      {
        id: "2252561", // Matches MSSV
        name: "Nguyễn Ngọc Khôi",
        time: "28-10-2024 - 2:30 PM", // Matching logsData DateTime
        fileSize: "500 KB",
        printerModel: "Brother MFC-L2750DW",
        building: "C4",
        status: "Thất bại",
        badgeClass: "bg-danger",
      },
    ];
    setRecentRequests(requests);
  };
  

  // Initialize or update the Chart.js chart
  const updateChart = () => {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    if (chartRef.current) chartRef.current.destroy();
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`),
        datasets: [
          {
            label: 'Doanh thu',
            data: Array.from({ length: 12 }, () => Math.random() * 342957 + 5000),
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: { y: { beginAtZero: true } },
      },
    });
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

  return (
    <>
        <Metadata/>
        <SPSONavBar/>

        <div className="container mt-5">
        <h1 className="text-center mb-4">
            <i className="bi bi-bar-chart-fill me-2" style={{ color: '#0056b3' }}></i>
            Báo cáo
        </h1>

        {/* Stats Overview */}
        <div className="row text-center d-flex justify-content-center my-2">
            <StatCard icon="bi-person-circle" color="#0056b3" number="4.792" text="Số người dùng" />
            <StatCard icon="bi-cart-fill" color="#28a745" number="35.497" text="Số giấy mua" />
            <StatCard icon="bi-currency-dollar" color="#ffc107" number="8.519.280 VND" text="Tổng doanh thu" />
        </div>

        {/* Year Selection Filter */}
        <div className="d-flex justify-content-center my-4">
            <div className="form-group me-4">
            <label htmlFor="yearSelect" className="form-label">Chọn năm:</label>
            <select
                className="form-select"
                id="yearSelect"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
            >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
            </div>
        </div>

        {/* Chart Section */}
        <div className="card-dashboard my-4 p-3">
            <h5 className="text-center">{`Thống kê doanh thu - Năm ${selectedYear}`}</h5>
            <div className="d-flex justify-content-center">
            <canvas id="revenueChart"></canvas>
            </div>
        </div>

        {/* Report Table */}
        <div className="container mt-5">
            <h2 className="text-center">Báo Cáo Hoạt Động</h2>
            <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                <th>Mô hình máy in</th>
                <th>Tòa nhà</th>
                <th>Khoảng thời gian</th>
                <th>Số trang đã in</th>
                <th>Tổng doanh thu (VND)</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, idx) => (
                <tr key={idx}>
                    <td>{item.printerModel}</td>
                    <td>{item.building}</td>
                    <td>{`Năm ${selectedYear}`}</td>
                    <td>{item.pagesPrinted}</td>
                    <td>{formatCurrency(item.totalRevenue)}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {/* Recent Requests Section */}
        <div className="container mb-4">
            <h5>Yêu cầu gần đây</h5>
            <table className="table table-bordered text-center table-striped">
            <thead className="table-dark">
                <tr>
                <th>MSNV</th>
                <th>Tên</th>
                <th>Thời gian</th>
                <th>Kích thước tệp</th>
                <th>Mô hình máy in</th>
                <th>Tòa</th>
                <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                {recentRequests.map((request) => (
                <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.name}</td>
                    <td>{request.time}</td>
                    <td>{request.fileSize}</td>
                    <td>{request.printerModel}</td>
                    <td>{request.building}</td>
                    <td>
                    <span className={`badge ${request.badgeClass}`}>{request.status}</span>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    </>
  );
};

// Reusable Stats Card Component
const StatCard = ({ icon, color, number, text }) => (
  <div className="col-lg-3 col-md-4 mb-3">
    <div className="card stats-card p-2">
      <i className={`bi ${icon} stats-icon`} style={{ color }}></i>
      <div className="number fs-4">{number}</div>
      <div className="text fs-5">{text}</div>
    </div>
  </div>
);

export default SPSODashboard;
