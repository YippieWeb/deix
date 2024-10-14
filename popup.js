document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // send a message to the content script to fetch the title
      chrome.tabs.sendMessage(tabs[0].id, { action: "getTitle" }, function (response) {
        if (response && response.title) {
          const showTitle = response.title;
          const deiIndex = deiData[showTitle] || "N/A"; // fallback if no DEI index is found
          document.getElementById("show-title").textContent = showTitle;
          document.getElementById("index-value").textContent = deiIndex;
        } else {
          document.getElementById("show-title").textContent = "Title not found";
          document.getElementById("index-value").textContent = "N/A";
        }
      });
    });
  });
  