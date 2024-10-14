chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getTitle") {
      const titleElement = document.querySelector(".title-card-container .video-title");
      const showTitle = titleElement ? titleElement.innerText : "Unknown";
      sendResponse({ title: showTitle });
    }
  });
  