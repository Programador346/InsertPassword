import { useState, useEffect } from 'react';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

const InserPasswordForm = () => {

  //Aqui Ingresar Logica

  return (
    <div>
      
      <div className="mx-auto">
        <div className="flex justify-center items-center h-screen" style={{ backgroundImage: 'url("https://www.ikusi.com/mx/wp-content/uploads/sites/2/2022/12/ikusi_ikusi_image_403.jpg")', backgroundSize: 'cover' }}>
          <div className="bg-black bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-center text-3xl font-serif mb-4 text-white">Ingresa tu contraseña</h2>
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
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InserPasswordForm;
