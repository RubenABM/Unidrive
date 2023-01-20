window.onload = async function getCount(){

    let organize = document.getElementById("organize");
    let organize2 = document.getElementById("organize2");
    let organize3 = document.getElementById("organize3");
    var user_id = sessionStorage.getItem("user_id");
    var user_cat = sessionStorage.getItem("usercat");
    var user_role_id = sessionStorage.getItem("user_role_id");

    console.log("userId = " + user_id);
    console.log("usercat = " + user_cat);
    let i = 1;
 
      if(user_role_id == 1) {
        document.getElementById("Services_Dash").style.display = 'none';
        document.getElementById("docente").style.display = 'inline';
        document.getElementById("admin").style.display = 'none';
        document.getElementById("fileavailable").style.display = 'none';
        document.getElementById("allfiles").style.display = 'none';
      }
      else if(user_role_id == 3)
      {
        document.getElementById("Services_Dash").style.display = 'none';
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

    try{

      //COUNT DOCENTE:

      let countdocente = await $.ajax({

        url: "/countdocente/",
        method: "get",
        dataType: "json",
 
      });
 
 
        i = 1;
        let html = "<p class=mt-0 style=color:#000;>" + countdocente.length + "</p>";


        organize.innerHTML = html;

      //COUNT PROJETOS:

      let countprojects = await $.ajax({

        url: "/countprojects/",
        method: "get",
        dataType: "json",
 
      });
 
 
        i = 1;
        let html2 = "<p class=mt-0 style=color:#000;>" + countprojects.length  + "</p>";


        organize2.innerHTML = html2;

        //COUNT USERS GERAIS:

      let countusersgerais = await $.ajax({

        url: "/countgeral/",
        method: "get",
        dataType: "json",
 
      });
 
 
        i = 1;
        let html3 = "<p class=mt-0 style=color:#000;>" + countusersgerais.length  + "</p>";;


        organize3.innerHTML = html3;
 

  } catch(err){
    console.log(err);
  }
}
 