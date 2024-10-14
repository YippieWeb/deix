// finds the Netflix title on the page using the latest selector.
function getNetflixTitle() {
    const titleElement = document.querySelector("[data-uia='video-title']");
    if (titleElement) {
      const fullTitle = titleElement.innerText;
      
      // split the title at the first occurrence of 'E' to isolate the show title
      const splitTitle = fullTitle.split('E')[0].trim();
      return splitTitle;
    }
    return null;
  }
  
  // send the title back to the popup script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTitle') {
      const title = getNetflixTitle();
      sendResponse({ title: title });
    }
  });
  