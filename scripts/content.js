// 탭 ID를 저장할 변수
let tabId;

 
chrome.runtime.onMessage.addListener(async (message, sender , sendResponse)=>{
    

    if(message.message === 'add'){
        console.log("================")
        const title = document.querySelector('.ytd-watch-metadata h1').innerText;
        const url = location.href;
        
        await chrome.runtime.sendMessage({title:title,url:url});
        
    }
    
    else{
        alert('error');
    }
    
})