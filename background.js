let color = '#3aa757';

chrome.runtime.onInstalled.addListener( () => {
  // Syncs between browers (if logged in)
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
