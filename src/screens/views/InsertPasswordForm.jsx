import { useState, useEffect } from 'react';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

const InserPasswordForm = () => {

  //Aqui Ingresar Logica

  return (
    <div>
      <img
        src="https://www.ikusi.com/mx/wp-content/uploads/sites/2/2022/12/ikusi_ikusi_image_403.jpg"
        alt="Imagen de fondo"
        className="absolute -inset-x-0  -inset-y-px w-full h-full object-cover z-0"
      />
      <div className="mx-auto">
        <div className="justify-center items-center p-48">
          <div className="relative z-full w-full max-w-md bg-black bg-opacity-75 shadow-md p-6 h-17 left-44  rounded-md">
            <h2 className="text-center text-3xl font-serif mb-4 text-white">Bienvenido a la Plataforma el siguiente paso es cambiar tu Contraseña</h2>
            <form>
              <input
                className="font-serif block w-full bg-transparent text-white border-b-2 border-gray-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 transition duration-500 ease-in-out transform hover:scale-105"
                type="password"
                placeholder="Contraseña"
              />
              <button
                className="w-full bg-blue-500 bg-opacity-75 hover:bg-opacity-100 text-white font-serif py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:scale-105"
                type="submit"
              >
                Cambiar Contraseña
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InserPasswordForm;
