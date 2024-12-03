import React, { useState } from 'react';
import axios from 'axios';
import Metadata from '../../Metadata/Metada'; // Corrected import path
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import { formatFileSize } from '../../formatFileSize'; // Import the utility function
import { useFileTypes } from '../../context/FileTypesContext'; // Import context for file types
import { useUploadedFiles } from '../../context/UploadedFileContext'; // Import context for uploaded files
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is installed

function StudentUploadDocuments() {
  // Access file types from the context
  const { fileTypes } = useFileTypes();

  // Access uploaded files context
  const { uploadedFiles, addUploadedFile, removeUploadedFile, clearUploadedFiles } = useUploadedFiles();

  // State variables for form inputs
  const [copies, setCopies] = useState(1);
  const [color, setColor] = useState(true);
  const [doubleSided, setDoubleSided] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const maxFiles = 10; // Maximum 10 files
  const maxTotalSize = 100 * 1024 * 1024; // 100MB total size

  // Handle file selection with validation
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Debugging: Log file name and type
    selectedFiles.forEach((file) => {
      console.log(`File Name: ${file.name}, File Type: ${file.type}`);
    });

    const validatedFiles = [];
    let errorMessages = [];

    // Calculate total number of files
    const totalFiles = uploadedFiles.length + selectedFiles.length;
    if (totalFiles > maxFiles) {
      setMessage(`You can upload a maximum of ${maxFiles} files. You have already selected ${uploadedFiles.length} file(s).`);
      return;
    }

    // Calculate current total size
    const currentTotalSize = uploadedFiles.reduce((acc, file) => acc + file.size, 0);
    const newFilesTotalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);
    const updatedTotalSize = currentTotalSize + newFilesTotalSize;

    if (updatedTotalSize > maxTotalSize) {
      setMessage(`Total file size exceeds the 100MB limit. Currently selected: ${formatFileSize(currentTotalSize)}.`);
      return;
    }

    selectedFiles.forEach((file) => {
      // Get file extension from file name
      const fileExtension = file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase();

      if (!fileTypes.includes(fileExtension)) {
        errorMessages.push(`Unsupported file extension: ${file.name}`);
      } else {
        // Prevent duplicate files
        const isDuplicate = uploadedFiles.some((existingFile) => existingFile.name === file.name && existingFile.size === file.size);
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
      validatedFiles.forEach((file) => addUploadedFile(file)); // Add validated files to context
    } else {
      setMessage('No new valid files selected.');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage('');

    if (uploadedFiles.length === 0) {
      setMessage('Please select at least one file to upload.');
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append('copies', copies);
    formData.append('color', color);
    formData.append('doubleSided', doubleSided);

    // Append files with 'files[]' to indicate an array
    uploadedFiles.forEach((file) => {
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
        clearUploadedFiles();
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
              accept={fileTypes.map((type) => `.${type}`).join(',')} // Dynamically set accept attribute
              onChange={handleFileChange}
              required
              disabled={isSubmitting || uploadedFiles.length >= maxFiles}
            />
            <div className="form-text">
              Allowed formats: {fileTypes.join(', ')} | Max total size: 100MB | Max files: {maxFiles}
            </div>
          </div>

          {/* Preview Selected Files */}
          {uploadedFiles.length > 0 && (
            <div className="mb-3">
              <label className="form-label">Selected Files:</label>
              <ul className="list-group">
                {uploadedFiles.map((file, index) => (
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
                      onClick={() => removeUploadedFile(index)}
                      disabled={isSubmitting}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              {/* Display Total Upload Size */}
              <div className="mt-2">
                <strong>Total Size:</strong> {formatFileSize(uploadedFiles.reduce((acc, file) => acc + file.size, 0))}
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default StudentUploadDocuments;
