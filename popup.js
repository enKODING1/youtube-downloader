window.onload = () => {
  const add = document.querySelector(".add");

  add.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message: "add" });
    });
  };
};
