// src/StudentHomePage/StudentUploadDocuments/StudentUploadDocuments.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Metadata from '../../Metadata/Metada'; // Corrected import path
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import { formatFileSize } from '../../formatFileSize'; // Import the utility function
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is installed

function StudentUploadDocuments() {
  // State variables for form inputs
  const [files, setFiles] = useState([]);
  const [copies, setCopies] = useState(1);
  const [color, setColor] = useState(true);
  const [doubleSided, setDoubleSided] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const maxSize = 10 * 1024 * 1024; // 10MB per file
  const maxFiles = 10; // Maximum 10 files

  // Handle file selection with validation
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
    ];

    // Calculate the total number of files after adding new ones
    const totalFiles = files.length + selectedFiles.length;
    if (totalFiles > maxFiles) {
      setMessage(`You can upload a maximum of ${maxFiles} files. You have already selected ${files.length} file(s).`);
      return;
    }

    const validatedFiles = [];
    let errorMessages = [];

    selectedFiles.forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        errorMessages.push(`Unsupported file type: ${file.name}`);
      } else if (file.size > maxSize) {
        errorMessages.push(`File too large (max 10MB): ${file.name} (${formatFileSize(file.size)})`);
      } else {
        // Prevent duplicate files (optional)
        const isDuplicate = files.some((existingFile) => existingFile.name === file.name && existingFile.size === file.size);
        if (!isDuplicate) {
          validatedFiles.push(file);
        } else {
          errorMessages.push(`Duplicate file skipped: ${file.name}`);
        }
      }
    });

    if (errorMessages.length > 0) {
      setMessage(errorMessages.join(' | '));
    } else if (validatedFiles.length > 0) {
      setMessage('Files added successfully and ready to upload.');
    } else {
      setMessage('No new valid files selected.');
    }

    // Append validated files to existing files
    setFiles((prevFiles) => [...prevFiles, ...validatedFiles]);
  };

  // Remove file from the list
  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    setMessage('File removed.');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage('');

    if (files.length === 0) {
      setMessage('Please select at least one file to upload.');
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append('copies', copies);
    formData.append('color', color);
    formData.append('doubleSided', doubleSided);

    // Append files with 'files[]' to indicate an array
    files.forEach((file) => {
      formData.append('files[]', file);
    });

    try {
      setIsSubmitting(true);
      setMessage('');

      // Replace the URL below with your backend endpoint
      const response = await axios.post('http://localhost:5000/api/submit-print', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });

      if (response.status === 200) {
        setMessage('Print request submitted successfully!');
        // Reset form fields
        setFiles([]);
        setCopies(1);
        setColor(true);
        setDoubleSided(false);
        setUploadProgress(0);
      } else {
        setMessage('Failed to submit print request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting print request:', error);
      setMessage('An error occurred while submitting your request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Metadata />
      <StudentNavBar />
      <div className="container mt-5">
        <h2>Upload Documents for Printing</h2>
        {message && (
          <div
            className={`alert ${
              message.includes('successfully') ? 'alert-success' : 'alert-danger'
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
        {isSubmitting && (
          <div className="progress mb-3">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: `${uploadProgress}%` }}
              aria-valuenow={uploadProgress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {uploadProgress}%
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* File Upload */}
          <div className="mb-3">
            <label htmlFor="files" className="form-label">
              Upload Files <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              type="file"
              id="files"
              multiple
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
              required
              disabled={isSubmitting || files.length >= maxFiles}
            />
            <div className="form-text">
              Allowed formats: .pdf, .doc, .docx, .txt | Max size per file: 10MB | Max files: {maxFiles}
            </div>
          </div>

          {/* Preview Selected Files */}
          {files.length > 0 && (
            <div className="mb-3">
              <label className="form-label">Selected Files:</label>
              <ul className="list-group">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <strong>{file.name}</strong> - {formatFileSize(file.size)}
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFile(index)}
                      disabled={isSubmitting}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              {/* Display Total Upload Size */}
              <div className="mt-2">
                <strong>Total Size:</strong> {formatFileSize(files.reduce((acc, file) => acc + file.size, 0))}
              </div>
            </div>
          )}

          {/* Number of Copies */}
          <div className="mb-3">
            <label htmlFor="copies" className="form-label">
              Number of Copies
            </label>
            <input
              type="number"
              className="form-control"
              id="copies"
              value={copies}
              min="1"
              max="100"
              onChange={(e) => setCopies(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Print Options */}
          <div className="mb-3">
            <label className="form-label">Print Options</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="color"
                checked={color}
                onChange={(e) => setColor(e.target.checked)}
                disabled={isSubmitting}
              />
              <label className="form-check-label" htmlFor="color">
                Color
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="doubleSided"
                checked={doubleSided}
                onChange={(e) => setDoubleSided(e.target.checked)}
                disabled={isSubmitting}
              />
              <label className="form-check-label" htmlFor="doubleSided">
                Double-Sided
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting || files.length === 0}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Print Request'}
          </button>
        </form>
      </div>
    </>
  );
}

export default StudentUploadDocuments;
