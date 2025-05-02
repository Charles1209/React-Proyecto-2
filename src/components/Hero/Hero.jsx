import React from 'react'
import Personaje from "../../assets/Personaje.png"
import Logo from "../../assets/Logo.png"
import {motion} from "framer-motion"

const Hero = () => {
  return (
	<section className='mt-36'>
		<div className='grid grid-cols-1 md:grid-cols-2'>
			{/* Textos y descripción */}
			<div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
				<img src={Logo} alt='Logo del Juego'/>
				<p className='py-12 text-white'>
					Magic Quest es emocionante juego de aventuras en un
					mundo de fantasía donde te embarcas en una épica
					búsqueda mágica. Explora reinos misteriosos, domina
					poderosos hechizos y enfrentate a criaturas legendarias
					mientras desvelas secretos ocultos y te convirtes en el
					héroe supremo. ¡La magia está en tus manos!
				</p>
				<div className='flex justify-center gap-4'>
					<a
					className='bg-purple-600 px-12 py-2 rounded-3xl text-white hover:bg-purple-700
					transition-all duration-300 items-center'
					>
						Jugar ahora
						<i className="bi bi-controller text-xl ml-2"></i>
					</a>
					<a
					className='text-white flex items-center cursor-pointer'
					>
						Ver Gameplay
						<i className="bi bi-youtube text-xl ml-2"></i>
					</a>
				</div>
			</div>

			{/* Imagen */}
			<div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
				<img src={Personaje} alt='Personaje del Juego'/>
			</div>
		</div>
	</section>
  )
}

export default Hero