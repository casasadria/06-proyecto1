export const GuardarEnStorage = (clave, elemento) => {

    //Conseguir los elementos que ya tenemos en el LocalStorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    if(Array.isArray(elementos)){
        //Añadir un elemento nuevo
        elementos.push(elemento);

    }else{
        //Crear array de 0
        elementos = [elemento];
    }
    
    //Guardar array de peliculas en localstorage
    localStorage.setItem(clave, JSON.stringify(elementos))

    //Devolver objeto guardado
    return elemento;
}