window.onload = async function getInfosDetails(){

    let fname = document.getElementById("fname");
    let uni = document.getElementById("uni");
    let facul = document.getElementById("facul");
    let course = document.getElementById("course");
    let uc = document.getElementById("uc");
    let year = document.getElementById("year");
    let nprojeto = document.getElementById("nprojeto");
    let naluno = document.getElementById("naluno");
    let show = document.getElementById("showimage");
    let download = document.getElementById("downloadimage");

    var con_id = sessionStorage.getItem("con_id");
    var user_role_id = sessionStorage.getItem("user_role_id");
    console.log("ID:::" + con_id);


    
    //let word2 = sessionStorage.setItem('kword', word);
    //let word = sessionStorage.getItem("kword");

    try{
 
        //REFERENTE AOS Conteudos:
  
        /*
        if(word === null)
          var word2 = "";
        else
          word = sessionStorage.getItem("kword");*/

        let contents = await $.ajax({
  
          url: "/details/" + con_id + "/",
          method: "get",
          dataType: "json",
   
        });
   
        console.log("Contents: = " + JSON.stringify(contents));
        
        html = "";
        html2 = "";
        html3 = "";
        html4 = "";
        html5 = "";
        html6 = "";
        html7 = "";
        html8 = "";
        html9 = "";
        html10 = "";
        

          for(let content of contents){

            let nomeprojeto = content.pro_name
            let nomeconteudo = content.con_name
            let class1 = 'class = "btn btn-icon  btn-success-light me-2 bradius"'
            let class2 = 'class = "btn btn-icon  btn-danger-light me-2 bradius"'
            let src = 'src = "../../projetos/' + nomeprojeto + '/' + nomeconteudo + '.' + content.con_type + '"'
            let href = 'href = "../../projetos/' + nomeprojeto + '/' + nomeconteudo + '.' + content.con_type + '"'

            html += "" + content.con_name
            html2 += "" + content.uni_name
            html3 += "" + content.col_name
            html4 += "" + content.cour_name
            html5 += "" + content.unit_name
            html6 += "" + content.year_value
            html7 += "" + content.pro_name
            html8 += "" +  content.stu_name
            if(content.con_type == "pdf")
            {
              html9 += "" + '<a href=javascript:void(0)><img src = "../assets/images/imagenf.png" width=100% alt=img class=br-5 w-100></a>';}
            else
              { html9 += "" + "<a href=javascript:void(0)><img " + src + " alt=img class=br-5 w-100></a>";}
            html10 += "" + "<a " + href + " download= " + content.con_name + "> " +
            '<button type=button ' + class1 + '><i class= "fe fe-download fs-14"></i></button></a> ' +                                     
            '<button id=delete type=button ' + class2 + ' data-bs-toggle=modal data-bs-target=#exampleModal class=side-menu__item has-link data-bs-toggle=slide href=#myModal><i class="fe fe-trash"></i></button>';
   
        fname.innerHTML = html;
        uni.innerHTML = html2;
        facul.innerHTML = html3;
        course.innerHTML = html4;
        uc.innerHTML = html5;
        year.innerHTML = html6;
        nprojeto.innerHTML = html7;
        naluno.innerHTML = html8;
        show.innerHTML = html9;
        download.innerHTML = html10}
        

        if(user_role_id == 1) {

          document.getElementById("docente").style.display = 'inline';
          document.getElementById("admin").style.display = 'none';
          document.getElementById("fileavailable").style.display = 'none';
          document.getElementById("allfiles").style.display = 'none';
          document.getElementById("delete").style.display = 'none';
        }
        else if(user_role_id == 3)
        {
          document.getElementById("docente").style.display = 'none';
          document.getElementById("admin").style.display = 'none';
          document.getElementById("fileavailable").style.display = 'inline';
          document.getElementById("allfiles").style.display = 'none';
          document.getElementById("delete").style.display = 'none';
        }else{
          document.getElementById("docente").style.display = 'inline';
          document.getElementById("admin").style.display = 'inline';
          document.getElementById("fileavailable").style.display = 'none';
          document.getElementById("allfiles").style.display = 'inline';
          document.getElementById("delete").style.display = 'inline';
        }

        //localStorage.removeItem('kword');

    } catch(err){
        console.log(err);
    }

}