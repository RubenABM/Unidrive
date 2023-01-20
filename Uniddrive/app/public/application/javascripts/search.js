/* async function search(){

    let host = "http://localhost:3000";
    let organize = document.getElementById("searchfiles");
    console.log("Função Search chamada...")

   try{

    /*
    let password = hashSync(document.getElementById("password").value, 10);
    
    let object = {

         user_num: document.getElementById("number").value,
         user_password: password,
    };*/
    
    /* let object = {

         word: document.getElementById("searchavb_in").value,
    };

    console.log("Sending the object with values: " + object);

    let searchaut = await $.ajax({
        url: "/contents/" + user_cat_id + "/" + object.word,
        method: "post",
        data: JSON.stringify(object),
        contentType: "application/json",
        dataType: "json",


    });
    
   // alert("Authenticate user: " + JSON.stringify(authUser));
   

    sessionStorage.setItem('word', searchaut.word);

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



    
    console.log(searchaut.word);
   }  catch (err) {
    console.log(err);
    //  window.alert('something wron;g')
    window.location.assign(host);
    console.log("FALHOU")
    window.alert("Não Encontrado o Ficheiro Pretendido!")

    }

} */

$(document).ready(function(){
    var user_cat_id = sessionStorage.getItem("usercat");

    $('#searchavb_in').keyup(function(){
        if(typeof request !== 'undefined')
        {
           request.abort();
        }

        let input = document.getElementById("searchavb_in").value;
        console.log(input)

        /*if(input == '')
        {
            document.getElementById("searchres").style.display = "none";
            return;
        }*/

        let search = $.ajax({
            url: "/contents/" + user_cat_id + "/" + input,
            method: 'GET',
            dataType: "json",

            success: function(n){
                //console.log("teste" + JSON.stringify(search))
                if(n.content == "notfound")
                {
                    showAlert(naoExiste);
                    return;
                }
                else
                {
                    for(file in search)
                    {
                        let nomeprojeto = file.pro_name
                        let nomeconteudo = file.con_name

                        if(file.con_type == "pdf")
                        {
                        src = ' src = "../assets/images/imagenf.png" '
                        }else{
                        src = 'src = "../../projetos/' + nomeprojeto + '/' + nomeconteudo + '.' + file.con_type + '"'
                        }

                        
                        html += "" + "<div onclick=pass(" + file.con_id + ") class= col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xxl-2> " +
                        "<div class= card overflow-hidden > " +
                            "<a href=filemanager-details.html><img " + src + " width=100% alt=img class=file-manager-list w-100></a> " +
                            "<div class=card-footer> " +
                                "<div class=d-flex> " +
                                    "<div class=><h5 class=mb-0 fw-semibold text-break>" + file.con_name + "</h5> " + 
                        "</div><div class=ms-auto my-auto><span class=text-muted mb-0> ." + file.con_type + "</span> " +
                        " </div></div></div></div></div>";
                        i = i+1;
                    }
                    
                }
            }
        });
    });
}); 