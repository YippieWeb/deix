document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // For testing purposes, use a hardcoded title like "Big Mouth"
      const showTitle = "Big Mouth";  // Replace this with dynamic title fetching later
      const deiIndex = deiData[showTitle] || "N/A";  // Fallback if no data
      document.getElementById("show-title").textContent = showTitle;
      document.getElementById("index-value").textContent = deiIndex;
    });
  });
  
  function getShowTitle() {
    // This function will later be used to get the real title from Netflix
    return "Big Mouth";  // Hardcoded title for testing
  }  