async function removecontent() {

    let host = "http://localhost:3000";
    var con_id = sessionStorage.getItem("con_id");

    try {
        
        let data = {
            con_id: con_id
        }

        console.log("AQUIIII: " + JSON.stringify(data))

        let deleteContent = await $.ajax({
            url: "/details/deletecontent",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });

        //window.alert("Ficheiro eliminado")
        showAlert(sucessoFich);
        window.location.assign(host + "/application/views/allfiles.html");

    } catch (err) {
        //window.alert("Erro ao eliminar!");
        showAlert(erroFich);
        console.log(JSON.stringify(data));
        window.location.assign(host + "/application/views/filemanager-details.html");

        
    }
}