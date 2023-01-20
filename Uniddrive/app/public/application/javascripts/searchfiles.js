window.onload = async function getInfos(){

    let host = "http://localhost:3000";
    let organize = document.getElementById("row row-sm");
    var user_id = sessionStorage.getItem("user_id");
    var user_cat_id = sessionStorage.getItem("usercat");
    var user_role_id = sessionStorage.getItem("user_role_id");

    try{
 
         //REFERENTE AOS Conteudos:
  
        let contents = await $.ajax({
  
          url: "/contents/" + user_cat_id,
          method: "get",
          dataType: "json",
   
        });
   
        console.log("Contents: = " + JSON.stringify(contents));
        
        html = "";
        i = 1;

          for(let content of contents){
            html += "" + "<div class= col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xxl-2> " +
            "<div class= card overflow-hidden > " +
                "<a href=filemanager-details.html><img src=../assets/images/media/files/03.jpg alt=img class=file-manager-list w-100></a> " +
                "<div class=card-footer> " +
                    "<div class=d-flex> " +
                        "<div class=><h5 class=mb-0 fw-semibold text-break>" + content.con_name + "</h5> " + 
            "</div><div class=ms-auto my-auto><span class=text-muted mb-0> ID: " + content.con_id + "</span> " +
            " </div></div></div></div></div>";
            i = i+1;
          }
   
        organize.innerHTML = html;

        if(user_role_id == 1) {

          document.getElementById("docente").style.display = 'inline';
          document.getElementById("admin").style.display = 'none';
          document.getElementById("fileavailable").style.display = 'none';
          document.getElementById("fileunavailable").style.display = 'none';
        }
        else if(user_role_id == 3)
        {
          document.getElementById("docente").style.display = 'none';
          document.getElementById("admin").style.display = 'none';
          document.getElementById("fileavailable").style.display = 'inline';
          document.getElementById("fileunavailable").style.display = 'none';
        }else{
          document.getElementById("docente").style.display = 'inline';
          document.getElementById("admin").style.display = 'inline';
          document.getElementById("fileavailable").style.display = 'inline';
          document.getElementById("fileunavailable").style.display = 'inline';
        }

    } catch(err){
        console.log(err);
    }

}
