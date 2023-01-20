window.onload = async function getStudentProjects(){

    let projectsDis = document.getElementById("projects");

    try{

        //REFERENTE AOS PROJETOS DISPONIVEIS:

      let projects = await $.ajax({

        url: "/studentprojects/",
        method: "get",
        dataType: "json",
 
      });
 
      console.log("Projects: = " + JSON.stringify(projects));
 
      i = 1;
        let html2 = "<select name=studentprojects id=studentprojects> ";

        for(let project of projects){
          console.log("Nome Projeto " + project.pro_name + " Aluno " + project.stu_name);
          html2 += "" + "<option value=" + project.pro_name + "> "+ project.pro_name + " | " + project.stu_name + "</option> ";
        i = i+1;
        }

        html2 += "</select>"
      
 
        projectsDis.innerHTML = html2;

    } catch(err){
    console.log(err);
  }


}