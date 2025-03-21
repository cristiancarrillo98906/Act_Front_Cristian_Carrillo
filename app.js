function cargarUsuarios(){
    fetch("http://localhost:4050/usuarios")
    .then(function(respuestaTextoPlano){
        //La respuesta (OK o KO) la transformo en JSON
        return respuestaTextoPlano.json()
    })
    .then(function(data){
        //Gestionamos el OK con "data" que tendrá formato JSON
        //console.log(data)
        const tbody = document.getElementById("usuarios-body")
        for(let usuarios of data){
            //Para cada producto, creamos una fila
            const row = document.createElement("tr") //<tr></tr>
            const idCell = document.createElement("td")
            idCell.innerText = usuarios.id

            const nombreCell = document.createElement("td")
            nombreCell.innerText = usuarios.name

            const apellidoCell = document.createElement("td")
            apellidoCell.innerText = usuarios.lastname

            const correoCell = document.createElement("td")
            correoCell.innerText = usuarios.email

            const usuarioCell = document.createElement("td")
            usuarioCell.innerText = usuarios.username

            const contraseñaCell = document.createElement("td")
            contraseñaCell.innerText = usuarios.password

            const perfilCell = document.createElement("td")
            perfilCell.innerText = usuarios.profile

            //SHOW BUTTON
            const detallesCell = document.createElement("td")
            const detallesButton = document.createElement("button")
            detallesButton.innerText = "Ver"
            detallesButton.classList.add("btn-detalles"); 
            detallesButton.onclick = function(){
                window.location.href = "show.html?id=" + usuarios.id
            }
            detallesCell.appendChild(detallesButton)

            row.appendChild(idCell)
            row.appendChild(nombreCell)
            row.appendChild(apellidoCell)
            row.appendChild(correoCell)
            row.appendChild(usuarioCell)
            row.appendChild(contraseñaCell)
            row.appendChild(perfilCell)
            tbody.appendChild(row)
        }
    })
    .catch(function(error){
        //Gestionamos el KO con "error" que tendrá formato JSON
        console.log("Error al obtener los módulos: ", error)
    })
}

cargarUsuarios()