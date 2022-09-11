browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    const elements = document.getElementsByClassName("mR-20");
    
    for( var i = 0; i < elements.length; i++  ){
        const button = elements[i].getElementsByClassName('btn-outline-primary')[0];
        if (button.textContent == 'フィードバックする') {
            button.style.color="red";
            button.style.borderColor="red";
        }
    }
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});


