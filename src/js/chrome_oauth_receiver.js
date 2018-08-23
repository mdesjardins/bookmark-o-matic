window.addEventListener("load", () => {
  var token = window.location.hash;
  chrome.runtime.sendMessage({ type: "dropboxConnectToken", content: token });
  window.location.hash = "";
  if (window.close) {
    return window.close();
  }
});
