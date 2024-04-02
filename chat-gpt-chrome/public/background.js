/*Global chrome */
console.log("background working...");
// Declaring constants to store LinkedIn URLs.
const linkedInListViewURL = "https://www.linkedin.com/jobs/collections";
const linkedInDetailView = "https://www.linkedin.com/jobs/view";

// This function grabs the job description text from the web page.
function grabJobDescription(className) {
    const jobDetailsContainer = document.body.querySelector(`.${className}`);
    const jobDetails = jobDetailsContainer.textContent;
    const cleanedJobDetails = jobDetails.replace(/\s\s+/g, " ");
    return cleanedJobDetails;
  }
  
// This is an event listener that runs when a tab is updated in Chrome.
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log("Event listener triggered.");
// Check if the tab is fully loaded and active.
    if (changeInfo.status === "complete" && tab.active) {
        // Check if the URL of the tab matches the LinkedIn list or detail view URL.
        if (
        tab.url?.startsWith(linkedInListViewURL) ||
        tab.url?.startsWith(linkedInDetailView)
        ) {
        // Execute the grabJobDescription function on the current tab and store the result in local storage.
        chrome.scripting
            .executeScript({
            target: { tabId: tabId },
            func: grabJobDescription,
            args: [getJobDescriptionClassName(tab.url)],
            })
            .then((queryResult) => {
            chrome.storage.local.set({ jobDescription: queryResult[0].result });
            });
        }
    }
});