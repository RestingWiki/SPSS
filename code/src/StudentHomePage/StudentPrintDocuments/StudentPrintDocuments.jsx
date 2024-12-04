import React, { useState } from 'react';
import { useConnectedPrinters } from '../../context/PrinterContext'; // Import the PrinterContext
import Metadata from '../../Metadata/Metada';
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import FileSelector from './choosefile';
import './StudentPrintDocument.css';
import Counter from './printpagecount';

function StudentPrintDocuments() {
  const { connectedPrinters } = useConnectedPrinters(); // Use context to access printers
  const [selectedPrinter, setSelectedPrinter] = useState(null); // Track selected printer
  const [selectedPaperType, setSelectedPaperType] = useState(''); // Paper size state
  const [selectedDuplexing, setSelectedDuplexing] = useState(''); // Duplexing state
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

  const handleSubmit = () => {
    if (!selectedPrinter || !selectedPaperType || !selectedDuplexing) {
      setSubmitStatus('Hãy điên thông tin vào đầy đủ ô!');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate loading
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('In tài liệu thành công!');
    }, 2000); // Simulates a 2-second submission process
  };

  // Options for radio buttons
  const paperTypeOptions = ['A4', 'A3'];
  const duplexingOptions = ['Yes', 'No'];

  return (
    <>
      <Metadata />
      <StudentNavBar />
      <div className="container-fluid mt-5">
        <div className="mx-auto p-5 shadow card-print" style={{ maxWidth: '800px' }}>
          <form>
            <h1 className="text-center mb-4">
              <i className="bi bi-file-earmark-text me-2"></i>Print Document
            </h1>
            <div className="upload-container">
              <p className="upload-title">Select Document:</p>
              <FileSelector />
            </div>
            <div className="counter-section">
              <p className="counter-title">Number of Copies:</p>
              <Counter />
            </div>
            <div className="radio-section-container">
              <div className="radio-section">
                <p className="radio-title">Choose Paper Type</p>
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
                <p className="radio-title">Choose Duplexing</p>
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
                    <th>
                      <i className="bi bi-hash me-1"></i> ID Máy in
                    </th>
                    <th>
                      <i className="bi bi-printer me-1"></i> Mô hình
                    </th>
                    <th>
                      <i className="bi bi-geo-alt-fill me-1"></i> Tòa
                    </th>
                    <th>
                      <i className="bi bi-toggle-on me-1"></i> Trạng thái
                    </th>
                    <th>
                      <i className="bi bi-check-circle me-1"></i> Chọn
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
            <br />
            <div className="text-center">
              <button
                type="button"
                className={`btn ${isSubmitting ? 'btn-warning' : 'btn-primary'} PrintButton`}
                onClick={handleSubmit}
                disabled={isSubmitting} // Disable button during submission
              >
                {isSubmitting ? 'Đang gửi...' : 'In tài liệu'}
              </button>
              {submitStatus && (
                <div className={`alert mt-3 ${isSubmitting ? 'alert-warning' : 'alert-success'}`}>
                  {submitStatus}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentPrintDocuments;
