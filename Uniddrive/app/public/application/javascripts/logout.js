async function logout() {

    let host = "http://localhost:3000";

    localStorage.clear()
    sessionStorage.clear();

    var Backlen = history.length;   
    history.go(-Backlen);
    window.location.href = host
}