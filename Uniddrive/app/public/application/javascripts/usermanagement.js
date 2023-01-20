window.onload = async function getInfos(){

    let organize = document.getElementById("organize");
    let organize2 = document.getElementById("organize2");
    let organize3 = document.getElementById("organize3");
    var user_id = sessionStorage.getItem("user_id");
    var user_role_id = sessionStorage.getItem("user_role_id");

    console.log("userId = " + user_id);
    let i = 1;
 
    try{

      //REFERENTE AOS ROLES:

      let roles = await $.ajax({

        url: "/roles/",
        method: "get",
        dataType: "json",
 
      });
 
      console.log("Roles: = " + JSON.stringify(roles));
 
        i = 1;
        let html = "<select name=roles id=roles> ";

        for(let role of roles){
          console.log("Role " + role.role_name);
          html += "" + "<option value=" + role.role_id + "> "+ role.role_name + "</option> ";
        i = i+1;
        }

        html += "</select>"

      organize.innerHTML = html;

      //REFERENTE AOS USERS:

      let users = await $.ajax({

        url: "/users/",
        method: "get",
        dataType: "json",
 
      });
 
      console.log("Users: = " + JSON.stringify(users));
 
        i = 1;
        let html2 = "<thead><tr> " +
            "<th width=25% class=text-center>Nome</th> " +
            "<th width=25% class=text-center>Numero</th> " +
            "<th width=20% class=text-center>Tipo</th> " +
            "<th width=20% class=text-center>Autorizaçao</th></tr></thead>";

        for(let user of users){
          console.log("User " + user.user_name);
          html2 += "<tbody> " +                         
          "<th width=25% class=text-center>" + user.user_name + "</th> " +
          "<th width=25% class=text-center>" + user.user_num + "</th> " +
          "<th width=20% class=text-center>" + user.role_name + "</th> " +
          "<th width=20% class=text-center>" + user.cat_name + "</th> " +
          "</tbody>";
        i = i+1;
      }


      organize2.innerHTML = html2;

      //REFERENTE AS CATEGORIAS:

      let categories = await $.ajax({

        url: "/categories/",
        method: "get",
        dataType: "json",
 
      });
 
      console.log("Categories: = " + JSON.stringify(categories));
 
      i = 1;
      let html3 = "<select name=usercat id=usercat> ";

      for(let category of categories){
        console.log("Cat " + category.cat_name);
        html3 += "" + "<option value=" + category.cat_id + "> "+ category.cat_name + "</option> ";
      i = i+1;
      }

      html3 += "</select>"

    organize3.innerHTML = html3;

    if(user_role_id == 1) {

      document.getElementById("docente").style.display = 'inline';
      document.getElementById("admin").style.display = 'none';
      document.getElementById("fileavailable").style.display = 'none';
      document.getElementById("allfiles").style.display = 'none';
    }
    else if(user_role_id == 3)
    {
      document.getElementById("docente").style.display = 'none';
      document.getElementById("admin").style.display = 'none';
      document.getElementById("fileavailable").style.display = 'inline';
      document.getElementById("allfiles").style.display = 'none';
      
    }else{
      document.getElementById("docente").style.display = 'inline';
      document.getElementById("admin").style.display = 'inline';
      document.getElementById("fileavailable").style.display = 'none';
      document.getElementById("allfiles").style.display = 'inline';
    }
 

  } catch(err){
    console.log(err);
  }
}
 