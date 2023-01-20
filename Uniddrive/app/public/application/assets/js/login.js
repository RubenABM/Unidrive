function showAlert(id)

{

  $(id).css('display', 'block');

  setTimeout(function(){$(id).css('opacity', '100%');},50);



  setTimeout(function(){

    $(id).css('opacity', '0%');

    setTimeout(function(){$(id).css('display', 'none');},100);

  },2000);

}



function login(){

    var credentials={

        'number': $("#numeroi").val(),

        'password': $("#passwordi").val()

    }



    if(credentials['username']===""||credentials['password']==="")

    {

        showAlert("#emptyAlert");

        return;

    }



    $.ajax({

        url: "https://testes.uniddrive.pt/auth/login",

        type: "POST",

        data: credentials,

        dataType: "JSON",

        success: function(result){

            if(result.state == "error")

            {

                showAlert("#errorAlert");

            }

            else if(result.state=="redirect" || result.state=="success")

            {

                showAlert("#loggedInAlert");

                setTimeout(function(){ window.location.href = "https://testes.uniddrive.pt/dashboard" }, 1500);

            }

            else

            {

                showAlert("#unknownAlert");

            }

        }

    });

}