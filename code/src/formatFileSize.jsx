/**
 * Formats the file size from bytes to a human-readable string.
 * @param {number} bytes - The file size in bytes.
 * @param {number} decimals - Number of decimal places.
 * @returns {string} - Formatted file size string.
 */
export function formatFileSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}