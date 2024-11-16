import React, { useEffect, useState } from 'react';
import { Card, Image  } from "@nextui-org/react";
import ConfirmationForm from './components/ConfirmationForm';
import Logo from './assets/images/logo.jpeg'
import TituloRow from './assets/images/tituloRow.jpg'
import CardComponent from './components/Card';
const Confirmation = () => {
  const targetDate = new Date('2024-12-14T00:00:00'); 
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

    return () => clearInterval(interval); 
  }, [targetDate]);

  return (
    <div className='w-full p-8 '>
    <Card className=" shadow-[#87A46C] relative w-full p-2 py-2">
      <header className="mb-4">
        <div className="flex flex-col items-center">
          <Image width={300} id="logo" src={Logo} alt="logo" className="mb-2 relative top-0 left-0 z-10" />
          <Image width={300} id="nombres" src={TituloRow} alt="luciaymario" className="mb-4" />
        </div>
      </header>
      <section className="text-center flex flex-col justify-center items-center">
        <h2 className="text-[#929A6D] text-xl">SÁBADO 14 DE DICIEMBRE DEL 2024</h2>
        <p className="text-[#929A6D]">Tijuana, B.C</p>
        <p className="p-2 font-thin">
        Estamos emocionados de que nos acompañes en nuestra boda. Tu presencia hará que este momento sea aún más inolvidable.

Nos vemos el 14 de Diciembre a las 18:00 en Tijuana, B.C. ¡Será un día lleno de amor, risas y recuerdos para toda la vida!

Con todo nuestro cariño,
        </p>
        <p className="text-base">Jovanny Y Rebeca</p>
        <ConfirmationForm />
        <p id="importante" className="text-[#929A6D]">* FAVOR DE CONFIRMA ASISTENCIA ANTES DEL <span>10 DE DICIEMBRE</span></p>
        {/* <CardComponent /> */}
      </section>
      <footer className="mt-4">
        <div id="cuenta" className="text-center p-5">
          <p className='text-[#707F63]' id="faltan">FALTAN</p>
          <p className='text-[#E4CD76]' id="cuenta-regresiva">{`${timeLeft.days} D ${timeLeft.hours} H ${timeLeft.minutes} M`}</p>
        </div>
      </footer>
    </Card>
    </div>
  );
};

export default Confirmation;