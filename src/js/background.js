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
});
