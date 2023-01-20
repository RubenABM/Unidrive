window.onload = async function setVisibility(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role_id = sessionStorage.getItem("user_role_id");

    if(user_role_id == 2) {

        document.getElementById("docente").style.display = 'inline';
        document.getElementById("admin").style.display = 'none';
        document.getElementById("fileavailable").style.display = 'none';
        document.getElementById("fileunavailable").style.display = 'none';
    }
    else
    {
        document.getElementById("hide").style.display = 'none';
    }

}