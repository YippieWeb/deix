// This function finds the Netflix title on the page using the latest selector.
function getNetflixTitle() {
    // New selector based on data-uia attribute
    const titleElement = document.querySelector("[data-uia='video-title']");
    if (titleElement) {
      const fullTitle = titleElement.innerText;
  
      // Use a regular expression to match "E" followed by one or more digits
      const match = fullTitle.match(/E\d+/);
      
      // If there's a match, slice the title up to the "E" followed by the number
      const showTitle = match ? fullTitle.substring(0, match.index).trim() : fullTitle;
      
      return showTitle;
    }
    return null;
  }
  
  // Send the title back to the popup script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTitle') {
      const title = getNetflixTitle();
      sendResponse({ title: title });
    }
  });  