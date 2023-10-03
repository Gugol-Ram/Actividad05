import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CrearEncuesta = ({ agregarEncuesta }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // const nuevaEncuesta = {
    //   titulo: data.titulo,
    //   descripcion: data.descripcion,
    //   pregunta: data.pregunta, // Asegúrate de que aquí estás tomando la pregunta del formulario
    // };
    agregarEncuesta(data);
    navigate("/");
  };

  return (
    <div>
      <h1>Crear Nueva Encuesta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Título: </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          {...register("titulo", {
            required: "Este campo es obligatorio",
            maxLength: {
              value: 50,
              message: "El título debe contener HASTA de 50 caracteres",
            },
          })}
        />
        {errors.titulo && <p>{errors.titulo.message}</p>}
        <label>Descripción: </label>
        <textarea
          id="descripcion"
          name="descripcion"
          {...register("descripcion", {
            maxLength: {
              value: 200,
              message: "La descripción debe tener HASTA 200 caracteres",
            },
          })}
        />
        {errors.descripcion && <p>{errors.descripcion.message}</p>}

        {/* campos adicionales */}

        <label>Pregunta: </label>
        <input
          type="text"
          id="pregunta"
          name="pregunta"
          {...register("pregunta", {
            maxLength: {
              value: 50,
              message: "La pregunta debe tener HASTA 50 caracteres",
            },
          })}
        />
        {errors.pregunta && <p>{errors.pregunta.message}</p>}

        <button type="submit">Guardar Encuesta</button>
      </form>
    </div>
  );
};

export default CrearEncuesta;
