//import { hashSync } from 'bcrypt';

async function login(){

    let host = "http://localhost:3000";
    
    console.log("Função login chamada...")

   try{

    /*
    let password = hashSync(document.getElementById("password").value, 10);
    
    let object = {

         user_num: document.getElementById("number").value,
         user_password: password,
    };*/
    
    let object = {

         user_num: document.getElementById("number").value,
         user_password: document.getElementById("password").value,
    };

    console.log("Sending the object with values: " + object);

    let authUser = await $.ajax({
        url: "/users/loginuser",
        method: "post",
        data: JSON.stringify(object),
        contentType: "application/json",
        dataType: "json",


    });
    
   // alert("Authenticate user: " + JSON.stringify(authUser));
   console.log("Verifying user with number: " + authUser.user_number + " and password: " + authUser.user_password);

    sessionStorage.setItem('user_id', authUser.user_id);
    sessionStorage.setItem('user_num', authUser.user_num);
    sessionStorage.setItem('user_role_id', authUser.user_role_id);
    sessionStorage.setItem('usercat', authUser.user_cat_id);

    console.log("FUNCIONOU")
    window.location.assign(host + "/application/views/dashboard.html");
    //window.alert("Login efetuado com sucesso!")
    showAlert(loginSucesso);

    
    console.log(authUser.user_id);
   }  catch (err) {
    console.log(err);
    //  window.alert('something wron;g')
    window.location.assign(host);
    console.log("FALHOU")
    //window.alert("Número e password incorretos!")
    showAlert(credencialsError);

    }

}