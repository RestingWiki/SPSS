import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Metadata from '../../Metadata/Metada';
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import FileSelector from './choosefile';
import './StudentPrintDocument.css';
import Counter from './printpagecount';

function StudentPrintDocuments() {
  const [selectedPaperType, setSelectedPaperType] = useState(''); // Paper size state
  const [selectedDuplexing, setSelectedDuplexing] = useState(''); // Duplexing state

  const handlePaperTypeChange = (event) => {
    setSelectedPaperType(event.target.value); // Update Paper Type
  };

  const handleDuplexingChange = (event) => {
    setSelectedDuplexing(event.target.value); // Update Duplexing
  };

  // Options for radio buttons
  const paperTypeOptions = ['A4', 'A3'];
  const duplexingOptions = ['Yes', 'No'];

  return (
    <>
      <Metadata />
      <StudentNavBar />
      <div className="container-fluid mt-5">
        <div className="mx-auto p-4 shadow card-print" style={{ maxWidth: '600px' }}>
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
            <br />
            <div className="text-center">
              <Link to="/another-page" className="PrintButton">
                Print
              </Link>
            </div>
          </form>
        </div>

        <h3 className="text-info mb-3">
          <i className="bi bi-link-45deg me-2"></i>Available Printers
        </h3>
        <table className="table table-hover text-center">
          <thead className="table-primary">
            <tr>
              <th>
                <i className="bi bi-hash me-1"></i> Printer ID
              </th>
              <th>
                <i className="bi bi-printer me-1"></i> Model
              </th>
              <th>
                <i className="bi bi-geo-alt-fill me-1"></i> Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Epson EcoTank L3110</td>
              <td>A5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Canon PIXMA TR8520</td>
              <td>A5</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lexmark MS431DN</td>
              <td>B10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentPrintDocuments;
