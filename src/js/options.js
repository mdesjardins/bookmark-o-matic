import "../css/options.css";
import { Dropbox } from "dropbox";
import secrets from "./secrets.development";

const link = document.getElementById("dropbox-link");

// TODO MOVE TO SECRET
const CLIENT_ID = secrets.clientId;
const EXTENSION_ID = "hchlpphnbeafpjbdfmiggmabnjclilcn";

// Set the login anchors href using dbx.getAuthenticationUrl()
const dbx = new Dropbox({ clientId: CLIENT_ID });
const authUrl = dbx.getAuthenticationUrl(
  `chrome-extension://${EXTENSION_ID}/src/options.html`
);
//http://localhost:8080/auth');
link.setAttribute("href", authUrl);
