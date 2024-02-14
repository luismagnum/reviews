import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Foter = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
            <h1 className='text-teal-500 font-semibold mt-5 text-xl pb-4'>Logo</h1>
            <p className='text-sm'>"..Deja que tu viaje comience con nosotros"
            </p>
            <div className='flex flex-row items-center md:mt-0 gap-6'>
          <button className='flex border-2 border-black bg-black mt-3 p-2 rounded-full text-white gap-4'>
            <a className="text-teal-500 text-4xl hover:text-teal-800 " href="https://wa.me/542984417477?text=Hola quiero hacer un pedido " target="_blank"><FaFacebookSquare /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="https://www.facebook.com/profile.php?id=100063541335021" target="_blank"><FaXTwitter /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="https://www.instagram.com/saboresdevenezuela2020?igshid=NjlwNzlyMDk2Mg==" target="_blank"><FaInstagramSquare /></a>
          </button>
          </div>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Nosotros</h1>
            <nav className='flex flex-col gap-2'>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Quienes somos</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Centro de Atencios</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Terminales</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Nuestra Flota</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Viajes</h1>
            <nav className='flex flex-col gap-2'>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Destinos</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Promociones</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Unirte al Club</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>------</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Ayuda</h1>
            <nav  className='flex flex-col gap-2'>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Documentacion para tu viaje</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Cambios y devoluciones</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Como Comprar?</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Politicas de equipaje</a>
            </nav>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 mt-10 mb-10'>
       <span className='text-sm ml-12'>@2024Todos los derechos reservados</span>
       <span className='text-sm ml-80'>
        Politicas de privacidad 
        <span className='ml-4'>Terminos y condiciones</span>
       </span>
      </div>
      <br></br>
    </div>
  )
}

export default Foter