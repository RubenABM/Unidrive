async function refresh() {

    let host = "http://localhost:3000";
    
    let word = document.getElementById("searchavb_in").value;

    sessionStorage.setItem('kword', word);

    window.location.assign(host + "/application/views/usermanagement.html");

    
}