import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e =>{
        e.preventDefault();

        //Conseguir datos del formulario

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de la pelicula a guardar 

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion

        };

        //Guardar estado
        setPeliState(peli);

        //Actualizar estado
        setListadoState(elementos => {
            if (Array.isArray(elementos)) {
                return [...elementos, peli];
            } else {
                return [peli]; // o cualquier otra acción que desees tomar
            }
        });

        //Guardar en el almacenamiento local
        GuardarEnStorage("pelis",peli);

    }



  return (
    <div className="add">
    <h3 className="title">{titulo}</h3>
        <strong>
            {(titulo && descripcion) && "Has creado la pelicula: "+ titulo}
        </strong>
            <form onSubmit={conseguirDatosForm}>
                <input id="titulo" name="titulo" type="text" placeholder="Titulo"/>
                <textarea placeholder="Descripción" id="descripcion" name="descripcion"></textarea>
                <input type="submit" value="Guardar" id="save"/>
            </form>
        </div>
  )
}
