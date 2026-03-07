import React, { useState, useRef } from "react";
import axios from "axios";

const UploadModal = ({ isOpen, onClose }) => {

  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [totalProgress, setTotalProgress] = useState(0);

  const fileInputRef = useRef();

  if (!isOpen) return null;

  const handleFiles = (newFiles) => {

    const fileArray = Array.from(newFiles).map(file => ({
      file,
      progress: 0,
      status: "pending"
    }));

    setFiles(prev => [...prev, ...fileArray]);

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
    setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const updateFileProgress = (index, progress) => {

    setFiles(prev => {

      const updated = [...prev];
      updated[index].progress = progress;

      return updated;

    });

  };

  const updateFileStatus = (index, status) => {

    setFiles(prev => {

      const updated = [...prev];
      updated[index].status = status;

      return updated;

    });

  };

  const calculateTotalProgress = () => {

    const total = files.reduce((acc, f) => acc + f.progress, 0);
    const avg = total / files.length;

    setTotalProgress(Math.round(avg));

  };

  const uploadFiles = async () => {

    if (files.length === 0) return;

    setUploading(true);

    for (let i = 0; i < files.length; i++) {

      const fileObj = files[i];

      const formData = new FormData();
      formData.append("file", fileObj.file);

      try {

        updateFileStatus(i, "uploading");

        await axios.post(
          `${import.meta.env.VITE_API_URL}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (event) => {

              const percent = Math.round(
                (event.loaded * 100) / event.total
              );

              updateFileProgress(i, percent);
              calculateTotalProgress();

            }
          }
        );

        updateFileStatus(i, "done");

      } catch (err) {

        console.error(err);
        updateFileStatus(i, "error");

      }

    }

    setUploading(false);

  };

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md bg-surface rounded-xl p-6 sm:p-8 text-center shadow-xl max-h-[90vh] overflow-y-auto">

        <h2 className="font-heading text-xl sm:text-2xl mb-6">
          Upload Resources
        </h2>

        {/* Drop Zone */}

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

          <div className="mt-6 text-left space-y-3">

            {files.map((fileObj, index) => (

              <div key={index} className="bg-surface-hover p-3 rounded">

                <div className="flex justify-between items-center mb-2">

                  <span className="text-text text-sm truncate max-w-[70%]">
                    {fileObj.file.name}
                  </span>

                  <button
                    onClick={() => removeFile(index)}
                    className="text-accent hover:scale-110"
                  >
                    ✕
                  </button>

                </div>

                {/* Progress bar */}

                <div className="w-full bg-black/20 rounded-full h-2">

                  <div
                    className="bg-accent h-2 rounded-full transition-all"
                    style={{ width: `${fileObj.progress}%` }}
                  />

                </div>

                <div className="text-xs mt-1 text-text-muted">

                  {fileObj.status === "pending" && "Waiting"}
                  {fileObj.status === "uploading" && `Uploading ${fileObj.progress}%`}
                  {fileObj.status === "done" && "Uploaded ✓"}
                  {fileObj.status === "error" && "Upload failed"}

                </div>

              </div>

            ))}

          </div>

        )}

        {/* Total Progress */}

        {uploading && (

          <div className="mt-6">

            <p className="text-xs text-text-muted mb-2">
              Total Upload Progress
            </p>

            <div className="w-full bg-black/20 rounded-full h-3">

              <div
                className="bg-accent h-3 rounded-full transition-all"
                style={{ width: `${totalProgress}%` }}
              />

            </div>

            <p className="text-xs mt-2 text-text-muted">
              {totalProgress}%
            </p>

          </div>

        )}

        {/* Upload Button */}

        {files.length > 0 && (

          <button
            onClick={uploadFiles}
            disabled={uploading}
            className="mt-6 btn-primary w-full"
          >

            {uploading ? "Uploading..." : "Upload Files"}

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