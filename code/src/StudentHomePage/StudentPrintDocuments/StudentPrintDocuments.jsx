import React, { useState } from 'react';
import { useConnectedPrinters } from '../../context/PrinterContext'; // Import the PrinterContext
import { useUploadedFiles } from '../../context/UploadedFileContext'; // Import the UploadedFileContext
import { usePaperContext } from '../../context/PaperContext'; // Import the PaperContext
import Metadata from '../../Metadata/Metada';
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import './StudentPrintDocument.css';
import Footer from '../../Footer/Footer';

function StudentPrintDocuments() {
  const { connectedPrinters } = useConnectedPrinters(); // Access connected printers
  const { uploadedFiles } = useUploadedFiles(); // Access uploaded files
  const { paperBalance, usePaper } = usePaperContext(); // Access and deduct paper balance
  const [selectedPrinter, setSelectedPrinter] = useState(null); // Track selected printer
  const [selectedFile, setSelectedFile] = useState(null); // Track selected file
  const [selectedPaperType, setSelectedPaperType] = useState(''); // Paper size state
  const [selectedDuplexing, setSelectedDuplexing] = useState(''); // Duplexing state
  const [copies, setCopies] = useState(1); // Track number of copies
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [submitStatus, setSubmitStatus] = useState(''); // Track final status

  const handlePaperTypeChange = (event) => {
    setSelectedPaperType(event.target.value);
  };

  const handleDuplexingChange = (event) => {
    setSelectedDuplexing(event.target.value);
  };

  const handlePrinterSelect = (printer) => {
    if (printer.status === 'enabled') {
      setSelectedPrinter(printer);
    }
  };

  const handleFileSelect = (event) => {
    const selectedIndex = event.target.value;
    if (selectedIndex !== '') {
      setSelectedFile(uploadedFiles[selectedIndex]);
    }
  };

  const handleCopiesChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10) || 1);
    setCopies(value);
  };

  const handleSubmit = () => {
    if (!selectedPrinter || !selectedFile || !selectedPaperType || !selectedDuplexing) {
      setSubmitStatus('Hãy điền đầy đủ thông tin vào các ô!');
      return;
    }

    const pagesPerCopy = selectedFile.pageCount * (selectedPaperType === 'A3' ? 2 : 1);
    const totalPagesNeeded = pagesPerCopy * copies;

    if (totalPagesNeeded > paperBalance) {
      setSubmitStatus(`In thất bại! Bạn cần thêm ${totalPagesNeeded - paperBalance} trang giấy để in.`);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate printing process
    setTimeout(() => {
      setIsSubmitting(false);
      usePaper(totalPagesNeeded); // Deduct the pages used for printing
      setSubmitStatus(`In tài liệu thành công! Bạn đã in ${copies} bản sao.`);
    }, 2000); // Simulates a 2-second submission process
  };

  // Options for radio buttons
  const paperTypeOptions = ['A4', 'A3'];
  const duplexingOptions = ['Có', 'Không'];

  return (
    <>
      <Metadata />
      <StudentNavBar />
      <div className="container-fluid mt-5">
        <div className="mx-auto p-5 shadow card-print" style={{ maxWidth: '800px' }}>
          <form>
            <h1 className="text-center mb-4">
              <i className="bi bi-file-earmark-text me-2"></i>In tài liệu
            </h1>
            {/* Paper Balance Section */}
            <div className="header-section mb-4">
              <h5 className="text-center mb-3">
                Số trang giấy còn lại:{' '}
                <strong
                  style={{
                    color: paperBalance > 0 ? 'green' : 'red',
                  }}
                >
                  {paperBalance} trang
                </strong>
              </h5>
            </div>
            <div className="file-selection-container mb-4">
              <h5 className="mb-3">Select Document:</h5>
              <select
                className="form-select"
                onChange={handleFileSelect}
                value={selectedFile ? uploadedFiles.indexOf(selectedFile) : ''}
              >
                <option value="">-- Select a file --</option>
                {uploadedFiles.map((file, index) => (
                  <option key={index} value={index}>
                    {file.name} ({file.pageCount || 'Unknown'} pages)
                  </option>
                ))}
              </select>
            </div>
            <div className="counter-section mb-4">
              <label htmlFor="copiesInput" className="form-label">Số lượng bản sao:</label>
              <input
                type="number"
                id="copiesInput"
                className="form-control"
                value={copies}
                min="1"
                onChange={handleCopiesChange}
              />
            </div>
            <div className="radio-section-container">
              <div className="radio-section">
                <p className="radio-title">Chọn kích thước giấy:</p>
                {paperTypeOptions.map((option, index) => (
                  <div key={index} className="form-check">
                    <input
                      type="radio"
                      id={`paperType-${option}`}
                      name="paperType"
                      value={option}
                      className="form-check-input"
                      onChange={handlePaperTypeChange}
                      checked={selectedPaperType === option}
                    />
                    <label htmlFor={`paperType-${option}`} className="form-check-label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <div className="radio-section">
                <p className="radio-title">In hai mặt:</p>
                {duplexingOptions.map((option, index) => (
                  <div key={index} className="form-check">
                    <input
                      type="radio"
                      id={`duplexing-${option}`}
                      name="duplexing"
                      value={option}
                      className="form-check-input"
                      onChange={handleDuplexingChange}
                      checked={selectedDuplexing === option}
                    />
                    <label htmlFor={`duplexing-${option}`} className="form-check-label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="printer-selection-section mt-4">
              <h3 className="text-info mb-3">
                <i className="bi bi-link-45deg me-2"></i>Available Printers
              </h3>
              <table className="table table-hover text-center">
                <thead className="table-primary">
                  <tr>
                    <th>ID Máy in</th>
                    <th>Mô hình</th>
                    <th>Tòa</th>
                    <th>Trạng thái</th>
                    <th>Chọn</th>
                  </tr>
                </thead>
                <tbody>
                  {connectedPrinters.map((printer) => (
                    <tr key={printer.id}>
                      <td>{printer.id}</td>
                      <td>{printer.model}</td>
                      <td>{printer.location}</td>
                      <td>
                        <span
                          className={`status-box ${
                            printer.status === 'enabled' ? 'status-enabled' : 'status-disabled'
                          }`}
                        >
                          {printer.status === 'enabled' ? 'Bật' : 'Tắt'}
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className={`btn ${
                            printer.status === 'enabled'
                              ? selectedPrinter?.id === printer.id
                                ? 'btn-success'
                                : 'btn-primary'
                              : 'btn-secondary'
                          }`}
                          onClick={() => handlePrinterSelect(printer)}
                          disabled={printer.status !== 'enabled'} // Disable if printer is not enabled
                        >
                          {selectedPrinter?.id === printer.id ? 'Đã chọn' : 'Chọn'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-4">
              <button
                type="button"
                className={`btn ${isSubmitting ? 'btn-warning' : 'btn-primary'} PrintButton`}
                onClick={handleSubmit}
                disabled={isSubmitting} // Disable button during submission
              >
                {isSubmitting ? 'Đang gửi...' : 'In tài liệu'}
              </button>
              {submitStatus && (
                <div
                  className={`alert mt-3 ${
                    submitStatus.includes('thành công') ? 'alert-success' : 'alert-danger'
                  }`}
                >
                  {submitStatus}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StudentPrintDocuments;
