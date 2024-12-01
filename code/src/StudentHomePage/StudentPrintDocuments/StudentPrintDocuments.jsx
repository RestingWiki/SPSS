import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import Metadata from '../../Metadata/Metada';
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import FileSelector from './choosefile'
import './StudentPrintDocument.css';
import Counter from './printpagecount'; 
import Dropdown from './DropdownMenu'

function StudentPrintDocuments(){

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    
    const options = ['Option 1', 'Option 2', 'Option 3']

    return(
        <>
            <Metadata/>
            <StudentNavBar/>
            <div className="container-fluid mt-5">
              <div className="mx-auto p-4 shadow card-print" style={{ maxWidth: "600px" }}>

                <form>
                    <h1 className="text-center mb-4"><i className="bi bi-file-earmark-text me-2"></i>in tài liệu</h1>
                    <div className="upload-container">
                    <p className="upload-title">Chọn tài liệu:</p> 
                    <FileSelector />
                    </div>
                    <div className="counter-section"> 
                        <p className="counter-title">số bản muốn in:</p> 
                        <Counter /> 
                    </div>
                    <div className="dropdown-section-container">
                            <div className="dropdown-section">
                                <p className="dropdown-title">Chọn giấy in</p>
                                <Dropdown 
                                    options={options} 
                                    selectedOption={selectedOption}
                                    onOptionChange={handleOptionChange}
                                />
                            </div>
                            <div className="dropdown-section">
                                <p className="dropdown-title">Chọn số mặt</p>
                                <Dropdown 
                                    options={options} 
                                    selectedOption={selectedOption}
                                    onOptionChange={handleOptionChange}
                                />
                            </div>
                        </div>
                    <div className="dropdown-section mt-2">
                    <p className="dropdown-title">Chọn máy in</p>
                    <Dropdown 
                        options={options} 
                        selectedOption={selectedOption}
                        onOptionChange={handleOptionChange}
                    />
                    </div>
                    <br/>
                    <div className="text-center">
                         <Link to="/another-page" class="PrintButton">In</Link>
                     </div>

                </form>

              </div>

              <h3 className="text-info mb-3"><i className="bi bi-link-45deg me-2"></i>Số máy in có thể chọn</h3>
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
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>Epson EcoTank L3110</th>
                                <th>A5</th>
                             </tr>
                             <tr>
                                <th>2</th>
                                <th>Canon PIXMA TR8520</th>
                                <th>A5</th>
                             </tr>
                             <tr>
                                <th>3</th>
                                <th>Lexmark MS431DN</th>
                                <th>B10</th>
                             </tr>
                             
                        </tbody>
                    </table>
             </div>

        </>
    )
}

export default StudentPrintDocuments

