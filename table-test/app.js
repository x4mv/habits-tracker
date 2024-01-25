//let nombre = prompt('Ingrese un nombre: ')


// Traigo la instancia del boton 
let agregar_fila_btn = document.getElementById('crearFila')

//Traemos la instancia de la tabla
let tableDays = document.getElementById('tablaDias')


//Creo la funcion que me debe ejecutar
crearFila = function() {
    

    // Insertamos una fila y con el table.row.length extraemos la longitud entera de la tabla
    let newRow = tableDays.insertRow(tableDays.rows.length)

    // Creamos las celdas 
    for (let i = 0 ; i < 7 ; i++){
        //agregamos la nueva celda
        let celda = newRow.insertCell(i)

        // le damos el nuevo valor
        celda.innerHTML = ''

        // asignamos una funcion onClick a cada celda 

        celda.onclick = function(){
            cambiarHeader(this)
        }

    }
    
}

cambiarHeader = function(celda){
    if (celda.classList.contains('celdaClick')){
        celda.classList.remove('celdaClick')
    }else{
        celda.classList.add('celdaClick')
    }
}

//Escucho los eventos que pasan con el boton
agregar_fila_btn.addEventListener('click', crearFila)
