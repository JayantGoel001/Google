function search(){
    let query = document.querySelector(".query").value;
    if (query) {
        let url = "https://www.google.com/search?q=" + query;
        window.open(url, '_self');
    }
}
function doodles(){
    let url = "https://www.google.com/doodles";
    window.open(url,'_self');
}