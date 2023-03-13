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
  const add = document.querySelector(".add"); // add 버튼 
  const content = document.querySelector(".content"); // content 를 담고 있는 element


  add.onclick = async () => {
    const queryOptions = { active: true, currentWindow: true };
    
    const tabs = await chrome.tabs.query(queryOptions);
    await chrome.tabs.sendMessage(tabs[0].id , {message:'add'});
  
   
  };

 


  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
   
      
      if(message === "error" || typeof message == 'object'){ return ; };

      let stack = await chrome.storage.local.get("stack").then(result=>{return result.stack}) || [];
      /* 
       - stack에 제대로 쌓이는지 체크 
       
       console.log(stack.length);
       console.log('end');
      */  
    
      content.innerHTML = '';
      
      for(let data of stack){
       content.innerHTML += renderItem(data.url , data.title);
      } 

    }
  );



};
