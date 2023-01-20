async function adduser() {

    let host = "http://localhost:3000";
    var user_cat = sessionStorage.getItem("user_cat_id");

    try {
        
        let data = {
            user_num: document.getElementById("fnumero").value,
            user_password: document.getElementById("fpassword").value,
            user_name: document.getElementById("fname").value,
            user_role_id: document.getElementById("roles").value,
            user_cat_id: document.getElementById("usercat").value
        }


        let newUser = await $.ajax({
            url: "/users/insertnewuser",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });

        //console.log("Inserted new user with id: " + newUser.user_id)
        showAlert(sucessoAddUser);
        //window.alert("User adicionado")
        window.location.assign(host + "/application/views/usermanagement.html");

    } catch (err) {
        showAlert(erroAddUser);
        //window.alert("Erro!");
        console.log(JSON.stringify(data));
        window.location.assign(host + "/application/views/usermanagement.html");
        //window.alert('just something wrong');
        
    }
}