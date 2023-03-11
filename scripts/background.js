const storage = chrome.storage;

chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
  console.log(message);
 // storage.local.set()
}) 

