function cargarDatos(){
    fetch('./controllers/traerProductosController.php')
    .then(response =>response.json())
    .then(data =>{
        const tablaDatos = document.getElementById('tablaDatos');
        tablaDatos.innerHTML = '';
        data.forEach(row =>{
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.nombre}</td>
            <td>${row.descripcion}</td>
            <td><button id='eliminar' onClick='eliminarProducto(${row.id})'>Eliminar</button></td>
            `;
            tablaDatos.appendChild(tr);
        });
    });
}
function eliminarProducto(id){
    fetch('controllers/eliminarProductoController.php?id='+id)
    .then((response)=> response.text())
    .then(data=>{
        alert("ok");

    });
}

cargarDatos();
