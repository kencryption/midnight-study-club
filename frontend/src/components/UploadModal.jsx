import React, { useState, useRef } from "react";
import axios from "axios";

const UploadModal = ({ isOpen, onClose }) => {

  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState(null);

  const fileInputRef = useRef();

  if (!isOpen) return null;

  const handleFiles = (newFiles) => {
    const fileArray = Array.from(newFiles);
    setFiles((prev) => [...prev, ...fileArray]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleBrowse = (e) => {
    handleFiles(e.target.files);
  };

  const removeFile = (indexToRemove) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const uploadFiles = async () => {

    if (files.length === 0) {
      setStatus({ type: "error", message: "Please select a file first." });
      return;
    }

    setUploading(true);
    setStatus(null);

    try {

      for (const file of files) {

        const formData = new FormData();
        formData.append("file", file);

        await axios.post(
          `${import.meta.env.VITE_API_URL}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );

      }

      setStatus({
        type: "success",
        message: "Files uploaded successfully!"
      });

      setFiles([]);

    } catch (err) {

      console.error(err);

      setStatus({
        type: "error",
        message: "Upload failed. Please try again."
      });

    }

    setUploading(false);

  };

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md bg-surface rounded-xl p-6 sm:p-8 text-center shadow-xl max-h-[90vh] overflow-y-auto">

        <h2 className="font-heading text-xl sm:text-2xl mb-6">
          Upload Resources
        </h2>

        {/* Drop Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 sm:p-12 cursor-pointer transition ${
            dragging ? "border-accent bg-surface-hover" : "border-text-muted"
          }`}
          onClick={() => fileInputRef.current.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >

          <p className="text-text-secondary text-sm sm:text-base">
            Drag & drop files here
          </p>

          <p className="text-text-muted text-xs sm:text-sm mt-2">
            or click to browse
          </p>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleBrowse}
          />

        </div>

        {/* File List */}
        {files.length > 0 && (

          <div className="mt-6 text-left">

            <h3 className="text-sm text-text-secondary mb-2">
              Selected Files
            </h3>

            <ul className="space-y-2 text-sm">

              {files.map((file, index) => (

                <li
                  key={index}
                  className="flex items-center justify-between bg-surface-hover px-3 py-2 rounded"
                >

                  <span className="text-text truncate max-w-[75%]">
                    {file.name}
                  </span>

                  <button
                    onClick={() => removeFile(index)}
                    className="text-accent hover:scale-110 transition"
                  >
                    ✕
                  </button>

                </li>

              ))}

            </ul>

          </div>

        )}

        {/* Status Message */}
        {status && (

          <div
            className={`mt-4 text-sm ${
              status.type === "success"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >

            {status.message}

          </div>

        )}

        {/* Upload Button */}
        {files.length > 0 && (

          <button
            onClick={uploadFiles}
            disabled={uploading}
            className="mt-6 btn-primary w-full"
          >

            {uploading ? "Uploading..." : "Upload"}

          </button>

        )}

        <button
          className="mt-4 btn-secondary w-full"
          onClick={onClose}
        >
          Close
        </button>

      </div>

    </div>

  );

};

export default UploadModal;