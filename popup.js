function renderItem(url, title) {
  const html = `
  <div class="item-wrap">
  <p class="yt-url">
      <a href="${url}">
          ${title}
      </a>
  </p>
</div>
  `;

  return html;
}


window.onload = () => {
  const add = document.querySelector(".add");
  const content = document.querySelector(".content");


  add.onclick = () => {
    console.log("click");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message: "add" });
    });
  };





  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
   
     
      if(message === "error"){ return ; };

      let stack =await chrome.storage.local.get("stack").then(result=>{return result.stack}) || [];
      console.log(stack.length);
      console.log('end');
      
    }
  );



};
