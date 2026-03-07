import fs from "fs";
import { google } from "googleapis";
import open from "open";

const credentials = JSON.parse(fs.readFileSync("oauth_credentials.json"));
const { client_secret, client_id, redirect_uris } = credentials.installed;

const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: ["https://www.googleapis.com/auth/drive"]
});

console.log("Open this URL in your browser:");
console.log(authUrl);

await open(authUrl);

process.stdin.once("data", async (code) => {
  const { tokens } = await oAuth2Client.getToken(code.toString().trim());

  fs.writeFileSync("token.json", JSON.stringify(tokens));

  console.log("Token saved to token.json");
  process.exit();
});