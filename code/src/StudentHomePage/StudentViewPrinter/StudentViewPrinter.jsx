import React from 'react';
import { Link } from 'react-router-dom';
import Metadata from '../../Metadata/Metada';
import StudentNavBar from '../StudentNavBar/StudentNavBar';

function StudentViewPrinter(){
    return(
        <>
            <Metadata/>
            <StudentNavBar/>   
            <div className="container-fluid mt-5">
              <h1 className="text-center mb-4"><i className="bi bi-printer me-2"></i>Xem máy in</h1>
              <img src="https://oisp.hcmut.edu.vn/academic-affairs/wp-content/uploads/2021/08/MAP-3D-01-scaled.jpg" alt="Paris" style={{width:'100%'}}/>
              <h3 className="text-info mb-3"><i className="bi bi-link-45deg me-2"></i>Số máy in đã kết nối</h3>
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
                            <tr>
                                <th>1</th>
                                <th>Epson EcoTank L3110</th>
                                <th>A5</th>
                                <th><span class="status-box status-enabled">Bật</span></th>
                             </tr>
                             <tr>
                                <th>2</th>
                                <th>Canon PIXMA TR8520</th>
                                <th>A5</th>
                                <th><span class="status-box status-enabled">Bật</span></th>
                             </tr>
                             <tr>
                                <th>3</th>
                                <th>Lexmark MS431DN</th>
                                <th>B10</th>
                                <th><span class="status-box status-enabled">Bật</span></th>
                             </tr>
                             <tr>
                                <th>4</th>
                                <th>Lexmark MS431DN</th>
                                <th>B10</th>
                                <th><span class="status-box status-disabled">Tắt</span></th>
                             </tr>
                             <tr>
                                <th>5</th>
                                <th>Epson EcoTank L3110</th>
                                <th>C4</th>
                                <th><span class="status-box status-disabled">Tắt</span></th>
                             </tr>
                             <tr>
                                <th>6</th>
                                <th>Brother MFC-L2750DW</th>
                                <th>C4</th>
                                <th><span class="status-box status-disabled">Tắt</span></th>
                             </tr>
                        </tbody>
                    </table>
             </div>
        </>
    )
}


export default StudentViewPrinter
