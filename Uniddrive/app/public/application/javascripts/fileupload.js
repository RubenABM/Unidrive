window.onload = async function getInfos(){

    let organize = document.getElementById("organize");
    let organize2 = document.getElementById("organize2");
    let organize3 = document.getElementById("organize3");
    let organize4 = document.getElementById("organize4");
    let organize5 = document.getElementById("organize5");
    let organize6 = document.getElementById("organize6");
    let organize7 = document.getElementById("organize7");
    let organize8 = document.getElementById("organize8");
    let organize9 = document.getElementById("organize9");
    var user_id = sessionStorage.getItem("user_id");
    var user_role_id = sessionStorage.getItem("user_role_id");

    let i = 1;
 
    /*
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
      }*/

    try{
 
      /*
      //REFERENTE AOS CURSOS:

       let courses = await $.ajax({
 
         url: "/courses/",
         method: "get",
         dataType: "json",
 
       });
 
        console.log("Courses = " + JSON.stringify(courses));
 
        i = 1;
        let html = "<select name=courses id=courses> ";

        for(let course of courses){
          console.log("Course " + course.cour_name);
          html += "" + "<option value=" + i + "> "+ course.cour_name + "</option> ";
        i = i+1;
        }

        html += "</select>"
       
       organize.innerHTML = html;

       //REFERENTE AS UCS:

       let units = await $.ajax({

        url: "/units/",
        method: "get",
        dataType: "json",
 
      });
 
      console.log("Units: = " + JSON.stringify(units));
 
      i = 1;
        let html2 = "<select name=units id=units> ";

        for(let unit of units){
          console.log("Unit " + unit.unit_name);
          html2 += "" + "<option value=" + i + "> "+ unit.unit_name + "</option> ";
        i = i+1;
        }

        html2 += "</select>"
      
 
      organize2.innerHTML = html2;*/

      //REFERENTE AOS CURSOS UCs:

      let unitcourses = await $.ajax({

        url: "/unitcourses/",
        method: "get",
        dataType: "json",
 
      });
 
      console.log("Units and Courses: = " + JSON.stringify(unitcourses));
 
      i = 1;
        let html2 = "<select name=unitcourses id=unitcourses> ";

        for(let unitcourse of unitcourses){
          console.log("Unit " + unitcourse.unit_name + " Course " + unitcourse.cour_name);
          html2 += "" + "<option value=" + unitcourse.unit_cour_id + "> "+ unitcourse.cour_name + " | " + unitcourse.unit_name + "</option> ";
        i = i+1;
        }

        html2 += "</select>"
      
 
      organize2.innerHTML = html2;
 
      //REFERENTE AOS STUDENTS:

      let students = await $.ajax({

        url: "/students/",
        method: "get",
        dataType: "json",
 
      });
 
      console.log("Students: = " + JSON.stringify(students));
 
      i = 1;
        let html6 = "<select name=students id=students> ";

        for(let student of students){
          console.log("Student " + student.stu_name);
          html6 += "" + "<option value=" + student.stu_id + "> "+ student.stu_name + "</option> ";
        i = i+1;
        }

        html6 += "</select>"

      organize6.innerHTML = html6;
 

    //REFERENTE AS CATEGORIAS:

    let categories = await $.ajax({

      url: "/categories/",
      method: "get",
      dataType: "json",

    });

    console.log("Categories: = " + JSON.stringify(categories));

    i = 1;
    let html4 = "<select name=categories id=categories> ";

    for(let category of categories){
      console.log("Category " + category.cat_name);
      html4 += "" + "<option value=" + category.cat_id + "> "+ category.cat_name + "</option> ";
     i = i+1;
    }

    html4 += "</select>"

    organize4.innerHTML = html4;

    //REFERENTE AOS PROJETOS:

    let projects = await $.ajax({

      url: "/projects/",
      method: "get",
      dataType: "json",

    });

    console.log("Projects: = " + JSON.stringify(projects));

    i = 1;
    let html7 = "<select name=projects id=projects> ";

    for(let project of projects){
      console.log("Project " + project.pro_name);
      html7 += "" + "<option value=" + project.pro_id + "> "+ project.pro_name + "</option> ";
     i = i+1;
    }

    html7 += "</select>"

    organize7.innerHTML = html7;


    //REFERENTE AOS PROJETOS COM ESTUDANTES:

    let studentprojects = await $.ajax({

      url: "/studentprojects/",
      method: "get",
      dataType: "json",

    });

    console.log("Student Projects: = " + JSON.stringify(studentprojects));

    i = 1;
    let html5 = "<select name=studentprojects id=studentprojects> ";

    for(let studentproject of studentprojects){
      //console.log("Project " + project.pro_name);
      html5 += "" + "<option value=" + studentproject.stu_pro_id + "> "+ studentproject.pro_name + " | " + studentproject.stu_name + "</option> ";
     i = i+1;
    }

    html5 += "</select>"

    organize5.innerHTML = html5;


    //REFERENTE AS INSTITUIÇÔES:

    let institutions = await $.ajax({

      url: "/institutions/",
      method: "get",
      dataType: "json",

    });

    console.log("Institutions: = " + JSON.stringify(institutions));

    i = 1;
    let html8 = "<select name=institutions id=institutions> ";

    for(let institution of institutions){
      //console.log("Project " + project.pro_name);
      html8 += "" + "<option value=" + institution.col_id + "> "+ institution.uni_name + " | " + institution.col_name + "</option> ";
     i = i+1;
    }

    html8 += "</select>"

    organize8.innerHTML = html8;


     //REFERENTE AOS ANOS:

     let years = await $.ajax({

      url: "/years/",
      method: "get",
      dataType: "json",

    });

    console.log("Years: = " + JSON.stringify(years));

    i = 1;
    let html9 = "<select name=years id=years> ";

    for(let year of years){
      //console.log("Project " + project.pro_name);
      html9 += "" + "<option value=" + year.year_id + "> " + year.year_value + "</option> ";
     i = i+1
    }

    html9 += "</select>"

    organize9.innerHTML = html9;

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
 /*
 window.onload = async function getUnits(){

  let organize2 = document.getElementById("organize2");
  var user_id = sessionStorage.getItem("user_id");
  console.log("userId = " + user_id);
  let i = 1;

  try{

     let units = await $.ajax({

       url: "/units/",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(units));

     let html = "";

     for(let unit of units){
       console.log("UC " + unit.unit_name);
       html += "<select name=units multiple> " +
      "<option value=" + i + "> "+ unit.unit_name + "</option> " +
      "</select>"
      i = i+1;
     }
     

     console.log("OBTEVE");

     organize2.innerHTML = html;


  } catch(err){
    console.log(err);
  }

}*/