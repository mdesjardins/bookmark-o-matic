import "../img/icon-128.png";
import "../img/icon-34.png";

chrome.extension.getBackgroundPage().console.log("Background running");

chrome.runtime.onInstalled.addListener(() => {
  chrome.bookmarks.onCreated.addListener(() => {
    chrome.extension.getBackgroundPage().console.log("Bookmark created");
  });

  chrome.bookmarks.onRemoved.addListener(() => {
    chrome.extension.getBackgroundPage().console.log("Bookmark removed");
  });

  chrome.bookmarks.onMoved.addListener(() => {
    chrome.extension.getBackgroundPage().console.log("Bookmark moved");
  });

  chrome.bookmarks.onChildrenReordered.addListener(() => {
    chrome.extension.getBackgroundPage().console.log("Bookmark reordered");
  });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    chrome.extension
      .getBackgroundPage()
      .console.log("receivedMessage ", request);

    if (request.type == "dropboxConnectToken")
      chrome.storage.sync.set({ dropboxConnectToken: request.content }, () => {
        chrome.extension
          .getBackgroundPage()
          .console.log("dropboxConnectToken is set to " + request.content);
      });
  });
});
