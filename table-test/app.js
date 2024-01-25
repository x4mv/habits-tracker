//let nombre = prompt('Ingrese un nombre: ')
// creando el calendario 
const year = {
    'Febrero':29,
    'Marzo':31,
    'Abril': 30,
    'Mayo': 31,
    'Junio': 30,
    'Julio':31,
    'Agosto':31,
    'Septiembre':30,
    'Octubre':31,
    'Noviembre':30,
    'Diciembre':31 
}

// Traigo la instancia del boton 
let agregar_fila_btn = document.getElementById('crearFila')

//Traemos la instancia de la tabla
let tableDays = document.getElementById('tablaDias')


//Creo la funcion que me debe ejecutar
crearFila = function() {
    

    // Insertamos una fila y con el table.row.length extraemos la longitud entera de la tabla
    let newRow = tableDays.insertRow(0)

    // Creamos las celdas 
    for (let i = 0 ; i < year.Febrero ; i++){
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
