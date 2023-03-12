const storage = chrome.storage;

console.log("running");

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {

  let stack = await storage.local.get("stack").then(result=>{return result.stack;}) || [];
  stack.push(message);
  
  let result = await storage.local.set({stack : stack});
  if(result) {
    chrome.runtime.sendMessage("error");
    return ;
  }
  chrome.runtime.sendMessage("saved",);
 

  return true;
});
