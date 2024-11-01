import React, { useEffect, useState } from 'react';
import { Card, Image } from "@nextui-org/react";
import ConfirmationForm from './components/ConfirmationForm';
const Confirmation = () => {
  const targetDate = new Date('2024-12-14T00:00:00'); // Set your target date here
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [targetDate]);

  return (
    <Card className="py-4 relative w-8/12">
      <header className="mb-4">
        <div className="flex flex-col items-center">
          <Image width={300} id="logo" src="public/images/logo.jpeg" alt="logo" className="mb-2 relative top-0 left-0 z-10" />
          <Image width={300} id="nombres" src="public/images/tituloRow.jpg" alt="luciaymario" className="mb-4" />
        </div>
      </header>
      <section className="text-center">
        <h2 className="text-[#929A6D] text-xl">SÁBADO 14 DE DICIEMBRE DEL 2024</h2>
        <p className="text-[#929A6D]">Tijuana, B.C</p>
        <h3 className="text-lg">FAMILIA Y AMIGOS,</h3>
        <p className="text-base">
          QUEREMOS COMPARTIR NUESTRO MOMENTO INOLVIDABLE CON USTEDES. ESTE SITIO WEB FUE CREADO PARA CONFIRMAR SU ASISTENCIA Y ACLARAR TODAS SUS DUDAS. OJALA PUEDAN ACOMPAÑARNOS, SERÁ UNA NOCHE ESPECIAL E INOLVIDABLE.
        </p>
        <p className="text-base">CON AMOR,</p>
        <p className="text-base">JOVANNY Y REBECA</p>
        <p className="text-base">J.F.R.G</p>
        <p className="text-[#929A6D]">FAVOR DE REALIZAR SU CONFIRMACIÓN POR ESTE MEDIO:</p>
        <ConfirmationForm />
        <p id="importante" className="text-[#929A6D]">* FAVOR DE CONFIRMA ASISTENCIA ANTES DEL <span>10 DE DICIEMBRE</span></p>
        <p id="mesa-regalos">Mesa de Regalos</p>
        <button className="bg-gray-300 p-2 rounded mr-2">
          <a href="https://www.amazon.com.mx" target="_blank" rel="noopener noreferrer">AMAZON</a>
        </button>
        <button className="bg-gray-300 p-2 rounded">
          <a href="sobre.html" target="_blank" rel="noopener noreferrer">SOBRE</a>
        </button>
      </section>
      <footer className="mt-4">
        <section id="cuenta" className="text-center">
          <p id="faltan">FALTAN</p>
          <p id="cuenta-regresiva">{`${timeLeft.days} D ${timeLeft.hours} H ${timeLeft.minutes} M`}</p>
          <p id="etiquetas">DIAS  H  MIN</p>
        </section>
        <button id="contactanos" className="bg-blue-500 text-white p-2 rounded">CONTACTANOS</button>
      </footer>
    </Card>
  );
};

export default Confirmation;