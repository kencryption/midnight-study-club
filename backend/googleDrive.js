import { google } from "googleapis";
import fs from "fs";

const credentials = JSON.parse(
  fs.readFileSync("oauth_credentials.json")
);

const token = JSON.parse(
  fs.readFileSync("token.json")
);

const { client_secret, client_id, redirect_uris } = credentials.installed;

const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

oAuth2Client.setCredentials(token);

const drive = google.drive({
  version: "v3",
  auth: oAuth2Client
});

export const uploadFile = async (file) => {

  const response = await drive.files.create({
    requestBody: {
      name: file.originalname,
      parents: [process.env.UPLOAD_FOLDER_ID]
    },
    media: {
      mimeType: file.mimetype,
      body: fs.createReadStream(file.path)
    },
    fields: "id"
  });

  return response.data;
};