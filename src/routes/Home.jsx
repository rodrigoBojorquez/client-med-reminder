import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoMedReminder from "../assets/icons/med-reminder.svg";
import HomeImage from "../assets/images/home-image.png";
import FormsFooter from '../components/FormsFooter';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className='bg-[#F2F4EA] w-full'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <header className='flex items-center justify-between px-12 pt-6 pb-5'>
        <motion.div
          className='flex items-end gap-4'
          variants={textVariants}
        >
          <img src={LogoMedReminder} alt="Logo" />
          <p className='text-[#1F4D36] text-3xl font-serif'>Med-Reminder</p>
        </motion.div>

        <motion.p
          className='text-[#1F4D36] font-serif text-lg tracking-wide'
          variants={textVariants}
        >
          Porque tu salud es lo más importante para nosotros
        </motion.p>

        <div className='flex gap-4 items-center'>
          <Link to={"/sign-up"}>
            <button
              className='px-5 py-2 rounded-full border-2 border-[#1F4D36] text-[#1F4D36] text-lg font-medium'
            
            >
              Crea tu cuenta
            </button>
          </Link>
          <Link to={"/login"}>
            <button
              className='px-5 py-2 rounded-full border-2 border-[#1F4D36] text-[#1F4D36] text-lg font-medium'
           
            >
              Inicia Sesión
            </button>
          </Link>
        </div>
      </header>
      <hr className='border border-[#1F4D36] w-[95%] m-auto mb-10' />

      <main className='px-10 flex justify-between items-center'>
        <motion.article
          className='flex flex-col gap-10 w-[40%]'
          variants={textVariants}
        >
          <div>
            <motion.h2
              className='text-[#1F4D36] text-7xl tracking-normal leading-[1.25]'
              variants={textVariants}
            >
              Cuida de tu bienestar con facilidad
            </motion.h2>
          </div>
          <motion.p
            className='tracking-wider'
            variants={textVariants}
          >
            Con Med-Reminder, te brindamos una plataforma fácil de usar y altamente personalizable que se adapta a tus necesidades individuales. Ya sea que necesites llevar un registro de tus propios medicamentos o administrar la toma de medicamentos de un ser querido, nuestra aplicación te facilitará la vida.
          </motion.p>
          <Link to={"/login"}>
            <button
              className='px-5 py-2 rounded-2xl border-2 bg-[#1F4D36] text-white text-lg font-extralight w-1/3 mb-10'
              
            >
              Inicia Sesion
            </button>
          </Link>
        </motion.article>

        <motion.article
          className='w-[45%] mb-5'
          variants={buttonVariants}
        >
          <motion.img
            src={HomeImage}
            alt="Large home image"

          />
        </motion.article>
      </main>

      <FormsFooter />
    </motion.div>
  );
}

export default Home;
