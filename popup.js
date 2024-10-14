const shows = {
    "The Big Bang Theory": 85,
    "Friends": 75,
    "Breaking Bad": 60,
    // add more shows here
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: getShowTitle,
        },
        (result) => {
          const showTitle = result[0].result;
          const deiIndex = shows[showTitle] || "N/A";
          document.getElementById("show-title").textContent = showTitle;
          document.getElementById("index-value").textContent = deiIndex;
        }
      );
    });
  });
  
  function getShowTitle() {
    // You'll need to adapt this to get the show title from the Netflix DOM
    const titleElement = document.querySelector(".video-title") || {}; // Example selector
    return titleElement.textContent || "Unknown";
  }
  