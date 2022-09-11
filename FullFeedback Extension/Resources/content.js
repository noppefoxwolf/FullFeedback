browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    const elements = document.getElementsByClassName("mR-20");
    
    for( var i = 0; i < elements.length; i++  ){
        const button = elements[i].getElementsByClassName('btn-outline-primary')[0];
        if (button.textContent == 'フィードバックする') {
            button.style.color="red";
            button.style.borderColor="red";
        }
    }
    
    
    const content = document.getElementsByClassName('feedbacks')[0];
    var complete_text = document.createElement('h2');
    var complete = Array.prototype.filter.call(elements, function(element){
        const button = element.getElementsByClassName('btn-outline-primary')[0];
        return button.textContent == 'フィードバックする';
    }).length;
    var total = elements.length;
    const percentage = ~~((complete / total) * 100);
    complete_text.textContent = `${complete} / ${total} (${percentage}%)`;
    content.prepend(complete_text);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});


