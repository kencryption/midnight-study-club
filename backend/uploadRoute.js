import express from "express";
import multer from "multer";
import fs from "fs";
import { uploadFile } from "./googleDrive.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

router.post("/", upload.single("file"), async (req, res) => {

  try {

    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await uploadFile(file);

    // delete temporary file
    fs.unlink(file.path, () => {});

    res.json({
      message: "Upload successful",
      fileId: result.id
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "Upload failed"
    });

  }

});

export default router;