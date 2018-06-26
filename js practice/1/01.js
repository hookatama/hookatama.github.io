document.onclick = function(event){
    if(event.target.tagName == 'IMG'){
        event.target.classList.toggle('bordered');
    }
}