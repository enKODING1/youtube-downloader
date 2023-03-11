chrome.runtime.onMessage.addListener((req, sender , sendResponse)=>{
    if(req.message === 'add'){
        const title = document.querySelector('.ytd-watch-metadata h1').innerText;
        const url = location.href;
        
        chrome.runtime.sendMessage({
            title:title,
            url:url
        })
    }
    
    else{
        alert('error');
    }
    
})